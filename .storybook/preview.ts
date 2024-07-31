import type { Preview } from "@storybook/react";

import '@/styles/globals.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export default preview;
