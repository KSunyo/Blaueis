import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { KINDS, SIZES } from "./Button";
import { FIGURES } from "../Icon/Icon"

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
            defaultValue: SIZES.Normal,
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
                RIGHT_ARROW: FIGURES.ArrowRight,
                DOWN_ARROW: FIGURES.ArrowDown,
            }
        },
        endIcon: {
            control: {type: "select"},
            options: ["NONE", "RIGHT_ARROW", "DOWN_ARROW"],
            mapping: {
                NONE: null,
                RIGHT_ARROW: FIGURES.ArrowRight,
                DOWN_ARROW: FIGURES.ArrowDown,
            }
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!",
    kind: KINDS.Primary,
    size: SIZES.Normal
};