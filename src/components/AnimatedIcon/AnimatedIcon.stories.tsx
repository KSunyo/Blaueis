import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AnimatedIcon, {Kind} from "./AnimatedIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "blaueis/AnimatedIcon",
  component: AnimatedIcon,
  argTypes: {
    kind: {
      control: {
        type: "radio",
      },
      defaultValue: Kind.RIGHT_ARROW
    }
  }
} as ComponentMeta<typeof AnimatedIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnimatedIcon> = (args) => <AnimatedIcon {...args} />;

export const RightArrow = Template.bind({});
RightArrow.args = {
  kind: Kind.RIGHT_ARROW
};
