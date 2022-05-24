import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, {Kind} from "./Button";
import {IconType} from "../Icon/Icon"

export default {
  title: "blaueis/Button",
  component: Button,
  argTypes: {
    kind: {
      control: {
        type: "radio",
      },
      defaultValue: Kind.PRIMARY
    },
    startIcon: {
      control: {type: "select"},
      options: ["NONE", "RIGHT_ARROW", "DOWN_ARROW", "UP_RIGHT_ARROW"],
      mapping: {
        NONE: null,
        RIGHT_ARROW: IconType.RIGHT_ARROW,
        DOWN_ARROW: IconType.DOWN_ARROW,
        UP_RIGHT_ARROW: IconType.UP_RIGHT_ARROW
      }
    },
    endIcon: {
      control: {type: "select"},
      options: ["NONE", "RIGHT_ARROW", "DOWN_ARROW", "UP_RIGHT_ARROW"],
      mapping: {
        NONE: null,
        RIGHT_ARROW: IconType.RIGHT_ARROW,
        DOWN_ARROW: IconType.DOWN_ARROW,
        UP_RIGHT_ARROW: IconType.UP_RIGHT_ARROW
      }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
  kind: Kind.PRIMARY
};