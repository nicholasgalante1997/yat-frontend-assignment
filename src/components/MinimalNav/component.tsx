import React from 'react';
import { Icon } from '../Icons';
import {
  MinimalNavParentContainer,
  MinimalNavButton,
  MinimalNavChildContainer,
} from './views';

const ICONS = ['home', 'user', 'smile', 'diamond'] as const;

export const MinimalNav = React.memo(function () {
  return (
    <MinimalNavParentContainer>
      <MinimalNavChildContainer>
        {ICONS.map((type) => (
          <MinimalNavButton>
            <Icon type={type} />
          </MinimalNavButton>
        ))}
      </MinimalNavChildContainer>
    </MinimalNavParentContainer>
  );
});
