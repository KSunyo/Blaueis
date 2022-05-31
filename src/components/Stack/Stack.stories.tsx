import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack, {Orientation} from "./Stack";

export default {
  title: "blaueis/Stack",
  component: Stack,
  argTypes: {
    orientation,
    spacing
  }
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {
  orientation: Orientation.COLUMN,
  spacing: 10
};