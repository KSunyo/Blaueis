import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { KINDS, SIZES, ICONS } from "../../values/constants";
import Button from "./Button";

export default {
    title: "blaueis/Button",
    component: Button,
    argTypes: {
        kind: { control: 'select', options: Object.keys(KINDS), mapping: KINDS, defaultValue: KINDS.Primary },
        size: { control: 'select', options: Object.keys(SIZES), mapping: SIZES, defaultValue: SIZES.Medium },
        disabled: { defaultValue: false },
        touch: { defaultValue: false },
        startIcon: { control: 'select', options: Object.keys(ICONS), mapping: ICONS },
        endIcon: { control: 'select', options: Object.keys(ICONS), mapping: ICONS }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: 'Click me!',
    kind: KINDS.Primary,
    size: SIZES.Medium
};