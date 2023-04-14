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
    <HeadingBarParentContainer tabIndex={1}>
      <HeadingBarImageTitleContainer tabIndex={1}>
        <HeadingBarImage src="collection_hero.png" alt="A cartoon woman singing" tabIndex={1} />
        <HeadingTitleContainer tabIndex={1}>
          <Title role="heading" aria-level={2} tabIndex={1}>
            {title}
          </Title>
          <Text role="note">{description}</Text>
        </HeadingTitleContainer>
      </HeadingBarImageTitleContainer>
      <HeadingBarStatTileContainer tabIndex={1}>
        {statTiles.map((statTileProps) => (
          <StatTile {...statTileProps} />
        ))}
      </HeadingBarStatTileContainer>
    </HeadingBarParentContainer>
  );
});
