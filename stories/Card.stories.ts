// Card.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    footer: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is the content of the card.',
    footer: 'Footer text here.',
    shadow: true,
  },
};

export const NoShadow: Story = {
  args: {
    title: 'Flat Card',
    content: 'This card has no shadow.',
    footer: 'Minimal look.',
    shadow: false,
  },
};

export const WithoutFooter: Story = {
  args: {
    title: 'Card Without Footer',
    content: 'Just a title and some content here.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card With Long Content',
    content:
      'This is a card with a lot of content. '.repeat(10),
    footer: 'Scroll or wrap if needed.',
    shadow: true,
  },
};
