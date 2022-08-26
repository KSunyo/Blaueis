import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon, { FIGURES, KINDS, SIZES } from "./Icon";

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
            options: Object.keys(FIGURES),
            mapping: FIGURES,
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
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <div id="defes"><Icon {...args} /></div>;

export const Icons = Template.bind({});
Icons.args = {
    type: FIGURES.ArrowRight,
    kind: KINDS.Secondary,
    size: SIZES.Normal
};