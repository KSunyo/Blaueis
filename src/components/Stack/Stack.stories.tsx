import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack, {Orientation} from "./Stack";
import Button, {ButtonKind} from "../Button/Button";

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
  orientation: Orientation.ROW,
  spacing: 10,
  children: [(<Button kind={ButtonKind.Primary} label="Button 1"/>),
    (<Button kind={ButtonKind.Primary} label="Button 2"/>),
    (<Button kind={ButtonKind.Primary} label="Button 3"/>),
    (<Button kind={ButtonKind.Primary} label="Button 4"/>),
    (<Button kind={ButtonKind.Primary} label="Button 5"/>)]
};