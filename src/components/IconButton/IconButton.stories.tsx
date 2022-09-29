import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { ICONS, KINDS, SHAPES, SIZES, DIRECTIONS } from "../../values/constants";
import IconButton from "./IconButton";

export default {
  title: "components/IconButton",
  component: IconButton,
  argTypes: {
    icon: { control: 'select', options: Object.keys(ICONS), mapping: ICONS },
    kind: { control: 'select', options: Object.keys(KINDS), mapping: KINDS },
    size: { control: 'select', options: Object.keys(SIZES), mapping: SIZES },
    shape: { control: 'select', options: Object.keys(SHAPES), mapping: SHAPES }
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const BackToTop = Template.bind({});
BackToTop.args = {
  kind: KINDS.Secondary,
  icon: ICONS.ArrowUp,
  size: SIZES.Large,
  animation: {type: "NudgeAnimation", direction: DIRECTIONS.ToTop}
};

export const Minimize = Template.bind({});
Minimize.args = {
  kind: KINDS.Primary,
  icon: ICONS.Minimize,
  shape: SHAPES.Circle,
  animation: {type: "ScaleAnimation", factor: 0.75}
};

export const Maximize = Template.bind({});
Maximize.args = {
  kind: KINDS.Primary,
  icon: ICONS.Maximize,
  shape: SHAPES.Circle,
  animation: {type: "ScaleAnimation", factor: 1.25}
};