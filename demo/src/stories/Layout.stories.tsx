import React from "react";

import { ComponentStory } from "@storybook/react";
import { Header } from "@shetharp/gatsby-theme-polaroid/src/components/header";
import { Layout, LayoutProps } from "@shetharp/gatsby-theme-polaroid/src/components/layout";
import { ThemeProvider } from "theme-ui";
import { themePolaroid } from "@shetharp/gatsby-theme-polaroid/src/gatsby-plugin-theme-ui";

export default {
  title: "Example/Layout",
  component: Layout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <ThemeProvider theme={themePolaroid}>
    <Layout {...args}></Layout>
  </ThemeProvider>
);

export const Default: ComponentStory<typeof Layout> = Template.bind({});
Default.args = {
  hasTransparentHeader: false,
  hasFullWidthContainer: false,
  hasFooter: true,
};

export const TransparentHeader: ComponentStory<typeof Layout> = Template.bind({});
TransparentHeader.args = {
  hasTransparentHeader: true,
  hasFullWidthContainer: true,
  hasFooter: false,
};
