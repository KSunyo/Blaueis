import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { KINDS, SIZES, ICONS } from "../../values/constants";
import Button from "./Button";

export default {
    title: "blaueis/Button",
    component: Button,
    argTypes: {
        kind: {
            control: {
                type: "select",
                labels: {
                    1: "Primary",
                    2: "Secondary",
                    3: "Tertiary"
                },
            },
            options: Object.keys(KINDS),
            mapping: KINDS,
            defaultValue: KINDS.Primary,
        },
        size: {
            control: {
                type: "select",
                labels: {
                    1: "Small",
                    2: "Normal",
                    3: "Large",
                },
            },
            options: Object.keys(SIZES),
            mapping: SIZES,
            defaultValue: SIZES.Medium,
        },
        disabled: {
          defaultValue: false,
        },
        touch: {
          defaultValue: false,
        },
        startIcon: {
            control: {type: "select"},
            options: ["NONE", "RIGHT_ARROW", "DOWN_ARROW"],
            mapping: {
                NONE: null,
                RIGHT_ARROW: ICONS.ArrowRight,
                DOWN_ARROW: ICONS.ArrowDown,
            }
        },
        endIcon: {
            control: {type: "select"},
            options: ["NONE", "RIGHT_ARROW", "DOWN_ARROW"],
            mapping: {
                NONE: null,
                RIGHT_ARROW: ICONS.ArrowRight,
                DOWN_ARROW: ICONS.ArrowDown,
            }
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!",
    kind: KINDS.Primary,
    size: SIZES.Medium
};