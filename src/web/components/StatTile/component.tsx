import React from 'react';
import { StatTileHeading, StatTileShell, StatTileValue } from './views';

export type StatTileProps = {
  title: string;
  value: string;
};

export const StatTile = React.memo(function (props: StatTileProps) {
  return (
    <StatTileShell>
      <StatTileHeading>{props.title}</StatTileHeading>
      <StatTileValue>{props.value}</StatTileValue>
    </StatTileShell>
  );
});
