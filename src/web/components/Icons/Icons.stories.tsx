import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './index';

export default {
  title: 'components/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <div style={{ height: '48px', width: '48px', background: 'rgb(0,0,0)' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

export const HomeIcon: Story = {
  render: () => <Icon type="home" />,
};

export const UserIcon: Story = {
  render: () => <Icon type="user" />,
};

export const SmileIcon: Story = {
  render: () => <Icon type="smile" />,
};

export const DiamondIcon: Story = {
  render: () => <Icon type="diamond" />,
};
