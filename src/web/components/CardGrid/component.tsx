import React from 'react';
import { CardGridFlexContainer } from './views';
import { TokenCard } from '../TokenCards';
import { useGetVisibleTokensCtx } from '../../contexts';

export const CardGrid = React.memo(function () {
  const tokens = useGetVisibleTokensCtx();
  return (
    <CardGridFlexContainer>
      {tokens.map((cardProps) => (
        <TokenCard {...cardProps} />
      ))}
    </CardGridFlexContainer>
  );
});
