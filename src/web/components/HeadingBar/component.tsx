import React from 'react';
import {
  HeadingBarParentContainer,
  HeadingBarImage,
  HeadingBarImageTitleContainer,
  HeadingTitleContainer,
  Title,
  Text,
  HeadingBarStatTileContainer,
} from './views';
import { StatTile, StatTileProps } from '../StatTile';

type HeadingBarProps = {
  title: string;
  description: string;
  statTiles: StatTileProps[];
};

export const HeadingBar = React.memo(function ({ description, title, statTiles }: HeadingBarProps) {
  return (
    <HeadingBarParentContainer>
      <HeadingBarImageTitleContainer>
        <HeadingBarImage src="collection_hero.png" alt="A cartoon woman singing" />
        <HeadingTitleContainer>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </HeadingTitleContainer>
      </HeadingBarImageTitleContainer>
      <HeadingBarStatTileContainer>
        {statTiles.map((statTileProps) => (
          <StatTile {...statTileProps} />
        ))}
      </HeadingBarStatTileContainer>
    </HeadingBarParentContainer>
  );
});
