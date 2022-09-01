import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ICONS, KINDS, SIZES } from "../../values/constants";
import Icon from "./Icon";

export default {
    title: "blaueis/Icon",
    component: Icon,
    argTypes: {
        type: { control: 'select', options: Object.keys(ICONS), mapping: ICONS },
        kind: { control: 'select', options: Object.keys(KINDS), mapping: KINDS },
        size: { control: 'select', options: Object.keys(SIZES), mapping: SIZES },
        rotation: { control: { type: "range", min: 0, max: 359, step: 1 } }
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});
Icons.args = {
    type: ICONS.ArrowRight,
    kind: KINDS.Secondary,
    size: SIZES.Medium
};