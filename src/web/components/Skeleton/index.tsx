import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  AppHeadingBarLoaderStatsTileWrapper,
  AppHeadingBarLoaderTitleWrapper,
  AppHeadingBarLoaderWrapper,
  AppLoadingWrapper,
} from './views';

export function AppLoading() {
  return (
    <AppLoadingWrapper>
      <AppHeadingBarLoaderWrapper>
        <AppHeadingBarLoaderTitleWrapper>
          <Skeleton height={'30px'} width="590px" count={1} />
          <Skeleton height={'12px'} width="590px" count={3} />
        </AppHeadingBarLoaderTitleWrapper>
        <AppHeadingBarLoaderStatsTileWrapper>
          <Skeleton height={'90px'} width={'90px'} count={1} />
          <Skeleton height={'90px'} width={'90px'} count={1} />
          <Skeleton height={'90px'} width={'90px'} count={1} />
          <Skeleton height={'90px'} width={'90px'} count={1} />
        </AppHeadingBarLoaderStatsTileWrapper>
      </AppHeadingBarLoaderWrapper>
    </AppLoadingWrapper>
  );
}
