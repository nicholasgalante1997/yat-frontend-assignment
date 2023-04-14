import React from 'react';
import { StatTileHeading, StatTileShell, StatTileValue } from './views';

export type StatTileProps = {
  title: string;
  value: string;
};

export const StatTile = React.memo(function (props: StatTileProps) {
  return (
    <StatTileShell tabIndex={1}>
      <StatTileHeading tabIndex={1} role="heading" aria-value={4}>
        {props.title}
      </StatTileHeading>
      <StatTileValue tabIndex={1}>{props.value}</StatTileValue>
    </StatTileShell>
  );
});
