import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack, {Orientation} from "./Stack";
import Button, {Kind} from "../Button/Button";

export default {
  title: "blaueis/Stack",
  component: Stack,
  argTypes: { 
    spacing: { 
      control: { 
        type: 'range', 
        min:1, 
        max:100, 
        step: 1 
      } 
    }
  }
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {
  orientation: Orientation.COLUMN,
  spacing: 10,
  children: [(<Button kind={Kind.PRIMARY} label="Button 1"/>),
    (<Button kind={Kind.PRIMARY} label="Button 2"/>),
    (<Button kind={Kind.PRIMARY} label="Button 3"/>),
    (<Button kind={Kind.PRIMARY} label="Button 4"/>),
    (<Button kind={Kind.PRIMARY} label="Button 5"/>)]
};