import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Button, {ButtonKind, ButtonSize, KINDS, SIZES} from "./Button";
import {IconType} from "../Icon/Icon"

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
            defaultValue: 1
        },
        size: {
            control: {
                type: "select",
                labels: {
                    1: "Normal",
                    2: "Large",
                },
            },
            options: Object.keys(SIZES),
            mapping: SIZES,
            defaultValue: 1
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
    kind: KINDS.Primary,
    size: SIZES.Normal,
};