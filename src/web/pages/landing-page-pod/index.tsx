import React, { useEffect } from 'react';
import { Layout, MinimalNav, AppLoading, HeadingBar, CardGrid, CardGridUtilBar } from '../../components';
import { useQueryCollections } from '../../query-fns';
import { MemoizedTokenCardContextProvider, MemoizedBannerContextProvider } from '../../contexts';
import { StatTileProps } from '../../components/StatTile';

function PodLandingPage() {
  const { data, isLoading, isError, error } = useQueryCollections();

  /**
   * attr names returned from the MSW dont match one to one with visual UI text, so we map stats data to UI tiles here
   * @returns
   */
  function getStatTilesFromPodQuery(): StatTileProps[] {
    if (!data) return [];
    return [
      {
        title: 'ASSETS',
        value: data.stats.tokens.toString(),
      },
      {
        title: 'HODLERS',
        value: data.stats.owners.toString(),
      },
      {
        title: 'VOLUME',
        value: data.stats.volume.daily.toString(),
      },
      {
        title: 'FLOOR PRICE',
        value: data.stats.floorPrice.current.toString(),
      },
    ];
  }

  const canRenderContent = React.useMemo(() => !isLoading && !isError && data, [isLoading, isError, data]);

  if (error || isError) {
    return (
      <Layout>
        <div
          style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontFamily: 'Alliance No 1.' }}>500 Server Error</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <MemoizedBannerContextProvider>
        <MinimalNav />
        {isLoading && <AppLoading />}
        {canRenderContent && (
          <React.Fragment>
            <HeadingBar
              statTiles={getStatTilesFromPodQuery()}
              title={data?.name ?? ''}
              description={data?.description ?? ''}
            />
            <MemoizedTokenCardContextProvider tokens={data?.tokens ?? []}>
              <CardGridUtilBar collection={{ name: data?.name ?? '' }} />
              <CardGrid />
            </MemoizedTokenCardContextProvider>
          </React.Fragment>
        )}
      </MemoizedBannerContextProvider>
    </Layout>
  );
}

export default React.memo(PodLandingPage);
