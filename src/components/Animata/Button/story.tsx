import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';


const meta: Meta<typeof Button> = {
  title: "Third Party/Animata/Button",
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Foobar',
  },
};