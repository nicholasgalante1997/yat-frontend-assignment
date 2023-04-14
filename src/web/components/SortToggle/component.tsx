import React, { memo } from 'react';
import { SortTab, SortToggleContainer } from './views';
import { Icon } from '../Icons';
import { useGetTokensCtxSortDir, useTokensCtxMutation } from '../../contexts';

export const SortToggle = memo(function () {
  const sortDir = useGetTokensCtxSortDir();
  const { mutateSort } = useTokensCtxMutation();
  const toggleAscending = () => mutateSort('ascending');
  const toggleDescending = () => mutateSort('descending');
  return (
    <SortToggleContainer tabIndex={1}>
      <SortTab
        active={sortDir === 'ascending'}
        onKeyDown={function (kE) {
          (kE.key === 'Enter' || kE.key === 'Return') && toggleAscending();
        }}
        onClick={toggleAscending}
        tabIndex={1}
      >
        <Icon type="arrow-up" />
      </SortTab>
      <SortTab
        active={sortDir === 'descending'}
        onKeyDown={function (kE) {
          (kE.key === 'Enter' || kE.key === 'Return') && toggleAscending();
        }}
        onClick={toggleDescending}
        tabIndex={1}
      >
        <Icon type="arrow-down" />
      </SortTab>
    </SortToggleContainer>
  );
});
