import React from "react";

import { Header } from "@shetharp/gatsby-theme-polaroid/src/components/header";
import { Layout } from "@shetharp/gatsby-theme-polaroid/src/components/layout";
import { ThemeProvider } from "theme-ui";
import { themePolaroid } from "@shetharp/gatsby-theme-polaroid/src/gatsby-plugin-theme-ui";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: HeaderProps) => (
  <ThemeProvider theme={themePolaroid}>
    <Layout>
      <Header {...args} />
    </Layout>
  </ThemeProvider>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
