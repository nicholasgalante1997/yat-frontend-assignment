import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './component';

export default {
  title: 'components/layout',
  component: Layout,
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Playground: Story = {
  render: () => <Layout>Im Content</Layout>,
};
