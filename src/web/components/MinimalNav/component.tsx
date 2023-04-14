import React from 'react';
import { Icon } from '../Icons';
import { MinimalNavParentContainer, MinimalNavButton, MinimalNavChildContainer } from './views';

const ICONS = ['home', 'user', 'smile', 'diamond'] as const;

export const MinimalNav = React.memo(function () {
  return (
    <MinimalNavParentContainer tabIndex={1}>
      <MinimalNavChildContainer tabIndex={1}>
        {ICONS.map((type) => (
          <MinimalNavButton tabIndex={1}>
            <Icon type={type} />
          </MinimalNavButton>
        ))}
      </MinimalNavChildContainer>
    </MinimalNavParentContainer>
  );
});
