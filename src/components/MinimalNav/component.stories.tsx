import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../Layout';
import { MinimalNav } from './component';

export default {
  title: 'components/Nav',
  component: MinimalNav,
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as Meta<typeof MinimalNav>;

type Story = StoryObj<typeof MinimalNav>;

export const Playground: Story = {
  render: () => <MinimalNav />,
};
