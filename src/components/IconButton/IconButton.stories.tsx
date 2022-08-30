import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import IconButton, { FIGURES, KINDS, SHAPES, SIZES } from "./IconButton";
import {Direction} from "../AnimatedIcon/AnimatedIcon";

export default {
  title: "blaueis/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: "select",
        labels: {
          1: "ArrowUp",
          2: "ArrowRight",
          3: "ArrowLeft",
          4: "ArrowDown",
          5: "Maximize",
          6: "Minimize"
        }
      },
      options: Object.keys(FIGURES),
      mapping: FIGURES,
    },
    kind: {
      control: {
        type: "select",
        labels: {
          1: "Primary",
          2: "Secondary",
          3: "Tertiary"
        },
      },
      options: Object.keys(KINDS),
      mapping: KINDS,
    },
    size: {
      control: {
        type: "select",
        labels: {
          1: "Small",
          2: "Normal",
          3: "Large",
        },
      },
      options: Object.keys(SIZES),
      mapping: SIZES,
    },
    shape: {
      control: {
        type: "select",
        labels: {
          1: "Square",
          2: "Circle",
        },
      },
      options: Object.keys(SHAPES),
      mapping: SHAPES,
    }
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const BackToTop = Template.bind({});
BackToTop.args = {
  kind: KINDS.Secondary,
  icon: FIGURES.ArrowUp,
  size: SIZES.Large,
  animation: {type: "NudgeAnimation", direction: Direction.TO_TOP}
};

export const Minimize = Template.bind({});
Minimize.args = {
  kind: KINDS.Primary,
  icon: FIGURES.Minimize,
  shape: SHAPES.Circle,
  animation: {type: "ScaleAnimation", factor: 0.75}
};

export const Maximize = Template.bind({});
Maximize.args = {
  kind: KINDS.Primary,
  icon: FIGURES.Maximize,
  shape: SHAPES.Circle,
  animation: {type: "ScaleAnimation", factor: 1.5}
};