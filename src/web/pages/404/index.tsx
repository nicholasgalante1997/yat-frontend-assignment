import React from 'react';
import { Layout } from '../../components';

export function NotFound404Page() {
  return (
    <Layout>
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        tabIndex={1}
      >
        <p tabIndex={1} style={{ fontFamily: '"Alliance No 1."' }}>404 Page Not Found</p>
        <br />
        <a tabIndex={1} style={{ fontFamily: '"Alliance No 1."' }} href="/" target="self">Pods Home</a>
      </div>
    </Layout>
  );
}
