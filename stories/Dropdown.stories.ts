// Dropdown.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Dropdown } from './Dropdown';

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Orange', value: 'orange' },
];

const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Pick a color',
    options,
    defaultValue: '',
    onChange: fn(), // 🔥 logs to the Actions panel in Storybook
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Preselected: Story = {
  args: {
    defaultValue: 'green',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
