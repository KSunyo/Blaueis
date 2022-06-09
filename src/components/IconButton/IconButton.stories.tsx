import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import IconButton from "./IconButton";
import {IconType} from "../Icon/Icon"
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
  icon: IconType.UP_ARROW,
  animation: {type: "NudgeAnimation", direction: Direction.TO_TOP}
};