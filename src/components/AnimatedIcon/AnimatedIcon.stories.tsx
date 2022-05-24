import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AnimatedIcon from "./AnimatedIcon";
import {IconType} from "../Icon/Icon"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "blaueis/AnimatedIcon",
  component: AnimatedIcon,
  argTypes: {
    kind: {
      control: {
        type: "radio",
      },
      defaultValue: IconType.RIGHT_ARROW
    }
  }
} as ComponentMeta<typeof AnimatedIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnimatedIcon> = (args) => <AnimatedIcon {...args} />;

export const RightArrow = Template.bind({});
RightArrow.args = {
  kind: IconType.RIGHT_ARROW
};
