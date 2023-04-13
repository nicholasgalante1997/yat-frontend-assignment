import React from 'react';
import { CardGridFlexContainer } from './views';
import { TokenCard } from '../TokenCards';
import { Token } from '../../types';

type CardGridProps = {
  cards: Token[];
};

export const CardGrid = React.memo(function (props: CardGridProps) {
  return (
    <CardGridFlexContainer>
      {props.cards.map((cardProps) => (
        <TokenCard {...cardProps} />
      ))}
    </CardGridFlexContainer>
  );
});
