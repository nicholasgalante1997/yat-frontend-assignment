/**
 * @abstract
 * HTML Templating Engine
 * This function accepts two arguments: A React Component that you wish to dehydrate into
 * 'static' markup, and an options object that assists in driving the Component configuration.
 * The function loads a public template html file - html.production.template, and then
 * embeds the result of dehydrating the component into a mounting element within the loaded html template
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import path from 'path';
import fs from 'fs';
import { logger } from './web/utils';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';

export type HeadTagConfig = {
  content: string;
  name: string;
};

export type EmbedOptions = {
  headTags?: HeadTagConfig[];
  bundleName: string;
  props?: Record<string, any>;
  queryConfig?: {
    queryClient: QueryClient;
    dehydratedState: any;
  };
};

export function prerender(Component: React.ComponentType<any>, options: EmbedOptions) {
  let html: string;
  let pageString: string;
  let error: Error | undefined;

  const sheet = new ServerStyleSheet();

  try {
    logger.log('retrieving html template...');
    html = fs.readFileSync(path.resolve(process.cwd(), 'html', 'prod.template.html'), { encoding: 'utf-8' });
    logger.log('Dehydrating styled-components on server...');
    const reactNode = options.queryConfig ? (
      <QueryClientProvider client={options.queryConfig.queryClient}>
          <Hydrate state={options.queryConfig.dehydratedState}>
            <Component {...(options.props ? options.props : {})} />
          </Hydrate>
        </QueryClientProvider>
    ) : (
      <Component {...(options.props ? options.props : {})} />
    )
    pageString = renderToString(sheet.collectStyles(reactNode));
    const styleTags = sheet.getStyleTags();
    html = html.replace('<!-- __style_mount__ -->', styleTags);
  } catch (e: any) {
    logger.error(e);
    error = e as Error;
    throw e;
  } finally {
    logger.log(`operation ended: status "${error ? 'failed' : 'successful'}"`);
    sheet.seal();
  }

  if (options.headTags && options.headTags?.length > 0) {
    let metaTagString = '';
    for (const metaTag of options.headTags) {
      metaTagString += `<meta name="${metaTag.name}" content="${metaTag.content}">`;
    }
    html = html.replace('<!-- __head_mount__ -->', metaTagString);
  } else {
    html = html.replace('<!-- __head_mount__ -->', '');
  }

  if (options.props && Object.keys(options.props).length > 0) {
    const componentStateElement = `<div id="component-state-mount">${JSON.stringify({ props: options.props })}</div>`;
    html = html.replace('<!-- __data_state_mount__ -->', componentStateElement);
  } else {
    html = html.replace('<!-- __data_state_mount__ -->', '');
  }

  if (options.queryConfig) {
    const reactQueryScriptTag = `<script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(
      options.queryConfig.dehydratedState
    )};</script>`;
    html = html.replace('<!-- __react_query_script_mount__ -->', reactQueryScriptTag);
  } else {
    html = html.replace('<!-- __react_query_script_mount__ -->', '');
  }

  const scriptTag = `<script src="/${options.bundleName}.bundle.js" defer></script>`;
  html = html.replace('<!-- __client_js_mount__ -->', scriptTag);

  return html.replace('<div id="production-root"></div>', `<div id="production-root">${pageString}</div>`);
}
