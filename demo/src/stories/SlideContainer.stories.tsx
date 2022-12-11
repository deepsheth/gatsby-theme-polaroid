import React from "react";

import { ComponentStory } from "@storybook/react";
import { SlideContainer } from "@shetharp/gatsby-theme-polaroid/src/components/slide-container";
import { Box, ThemeProvider } from "theme-ui";
import { themePolaroid } from "@shetharp/gatsby-theme-polaroid/src/gatsby-plugin-theme-ui";
import { SlideTitle } from "@shetharp/gatsby-theme-polaroid/src/components/slide-title";
import { SlideDescription } from "@shetharp/gatsby-theme-polaroid/src/components/slide-description";
import { SlideButton } from "@shetharp/gatsby-theme-polaroid/src/components/slide-button";
import { SystemStyleObject } from "@styled-system/css";

export default {
  title: "Example/SlideContainer",
  component: SlideContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => {
  const isBorderless = false;
  const isExpanded = false;
  const title = "Smile for the camera! And say hello to Polaroid.";
  const description =
    "Polaroid is a photography-focused Gatsby theme for building portfolio websites. It supports an MDX blog with tags/categories, syntax-highlighted code blocks, Theme UI for dark mode, and Typescript.";
  const button = { text: "click me", href: "" };

  return (
    <ThemeProvider theme={themePolaroid}>
      <SlideContainer isBorderless={isBorderless} shouldJustifyContent>
        <Box sx={sxBody}>
          <SlideTitle isExpanded={isExpanded} shouldAdjustWidth>
            {title}
          </SlideTitle>
          {/* <SlideDescription highlightColor={"black"} isExpanded={isExpanded} shouldAdjustWidth>
            {description}
          </SlideDescription> */}
        </Box>

        {!!button && (
          <SlideButton href={button.href} isBorderless={isBorderless}>
            {button.text}
          </SlideButton>
        )}
      </SlideContainer>
    </ThemeProvider>
  );
};

const sxBody: SystemStyleObject = {};

export const Default: ComponentStory<typeof SlideContainer> = Template.bind({});
Default.args = {};
