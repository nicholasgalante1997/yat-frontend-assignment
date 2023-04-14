import React, { memo } from 'react';
import { Badge as StyledBadge } from './views';

export type BadgeProps = {
  onClick?: () => void;
  children?: JSX.Element | React.ReactNode;
  className?: string;
  id?: string;
  active: boolean;
};

export const Badge = memo(function (props: BadgeProps) {
  return (
    <StyledBadge tabIndex={1} {...props}>
      {props.children}
    </StyledBadge>
  );
});
