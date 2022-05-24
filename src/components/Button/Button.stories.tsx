import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, {Kind} from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "blaueis/Button",
  component: Button,
  argTypes: {
    kind: {
      control: {
        type: "radio",
      },
      defaultValue: Kind.PRIMARY
    }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
  kind: Kind.SECONDARY
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};