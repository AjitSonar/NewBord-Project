import type { Preview } from "@storybook/react";
// .storybook/preview.js

import '../styles/globals.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/66f1a2f3ba13ca7bf8610447",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
