import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ICONS, KINDS, SIZES } from "../../values/constants";
import Icon from "./Icon";

export default {
    title: "blaueis/Icon",
    component: Icon,
    argTypes: {
        type: {
            control: {
                type: "select",
                labels: {
                    1: "ArrowUp",
                    2: "ArrowRight",
                    3: "ArrowLeft",
                    4: "ArrowDown",
                    5: "Maximize",
                    6: "Minimize"
                }
            },
            options: Object.keys(ICONS),
            mapping: ICONS,
        },
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
        },
        rotation: {
            control: {
                type: "range",
                min: 0,
                max: 359,
                step: 1
            }
        }
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <div id="defes"><Icon {...args} /></div>;

export const Icons = Template.bind({});
Icons.args = {
    type: ICONS.ArrowRight,
    kind: KINDS.Secondary,
    size: SIZES.Medium
};