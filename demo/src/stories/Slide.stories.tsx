import React from "react";

import { ComponentStory } from "@storybook/react";
import { Slide } from "@shetharp/gatsby-theme-polaroid/src/components/slide";
import { ThemeProvider } from "theme-ui";
import { themePolaroid } from "@shetharp/gatsby-theme-polaroid/src/gatsby-plugin-theme-ui";

export default {
  title: "Example/Slide",
  component: Slide,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <ThemeProvider theme={themePolaroid}>
    {/**
     * INTRO
     */}
    <Slide
      id="intro"
      title="Smile for the camera! And say hello to Polaroid."
      description={
        <React.Fragment>
          <p>
            Polaroid is a <em>photography-focused</em> Gatsby theme for building portfolio websites. It supports an MDX
            blog with tags/categories, syntax-highlighted code blocks, Theme UI for dark mode, and Typescript.
          </p>
          <p>
            Designed &amp; developed by <a href="https://arpitsheth.com">Arpit Sheth</a>.
          </p>
        </React.Fragment>
      }
      // fluid={slideImages.imgIntro.childImageSharp.fluid}
      overlayColor="veronica.dark"
      highlightColor="primary"
      isColorful
      isBorderless
      hasScrollIndicator
    />
  </ThemeProvider>
);

const WithChildrenTemplate = (args) => (
  <ThemeProvider theme={themePolaroid}>
    {/**
     * INTRO
     */}
    <Slide id="intro" title="Smile for the camera! And say hello to Polaroid.">
      Here is where the children go!
    </Slide>
  </ThemeProvider>
);

export const Default: ComponentStory<typeof Slide> = Template.bind({});
Default.args = {
  id: "1",
  title: "Title",
  description: "Description",
  overlayColor: "primary",
  highlightColor: "highlight",
  isColorful: false,
  isExpanded: false,
  isBorderless: false,
  hasDistinctBorder: false,
  hasScrollIndicator: false,
  imagePosition: "50% 50%",
};

export const WithChildren: ComponentStory<typeof Slide> = WithChildrenTemplate.bind({});
WithChildren.args = {
  id: "1",
  title: "Title",
  description: "Description",
  overlayColor: "primary",
  highlightColor: "highlight",
  isColorful: false,
  isExpanded: false,
  isBorderless: false,
  hasDistinctBorder: false,
  hasScrollIndicator: false,
  imagePosition: "50% 50%",
};
