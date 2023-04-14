import React from 'react';
import { LayoutView } from './views';

export const Layout: React.ComponentType<{
  children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
}> = React.memo(({ children }) => {
  return <LayoutView tabIndex={1}>{children}</LayoutView>;
});
