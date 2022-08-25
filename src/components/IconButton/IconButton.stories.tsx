import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import IconButton, {Kind, Shape, Size} from "./IconButton";
import {FIGURES, KINDS} from "../Icon/Icon"
import {Direction} from "../AnimatedIcon/AnimatedIcon";

export default {
  title: "blaueis/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: "radio",
      },
    },
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const BackToTop = Template.bind({});
BackToTop.args = {
  kind: KINDS.Secondary,
  icon: FIGURES.ArrowUp,
  size: Size.LARGE,
  animation: {type: "NudgeAnimation", direction: Direction.TO_TOP}
};

export const Minimize = Template.bind({});
Minimize.args = {
  kind: KINDS.Primary,
  icon: FIGURES.Minimize,
  shape: Shape.CIRCLE,
  animation: {type: "ScaleAnimation", factor: 0.75}
};

export const Maximize = Template.bind({});
Maximize.args = {
  kind: KINDS.Primary,
  icon: FIGURES.Maximize,
  shape: Shape.CIRCLE,
  animation: {type: "ScaleAnimation", factor: 1.5}
};