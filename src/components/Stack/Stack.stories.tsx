import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ORIENTATIONS, KINDS } from "../../values/constants";
import Stack from "./Stack";
import Button from "../Button/Button";

export default {
    title: "components/Stack",
    component: Stack,
    argTypes: {
        spacing: { control: { type: 'range', min:1, max:100, step: 1 } },
        orientation: {
            control: 'select',
            options: Object.keys(ORIENTATIONS),
            mapping: ORIENTATIONS,
            defaultValue: ORIENTATIONS.Row,
        },
    }
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {
    orientation: ORIENTATIONS.Row,
    spacing: 10,
    children: [(<Button kind={KINDS.Primary} label="Button 1"/>),
        (<Button kind={KINDS.Primary} label="Button 2"/>),
        (<Button kind={KINDS.Primary} label="Button 3"/>),
        (<Button kind={KINDS.Primary} label="Button 4"/>),
        (<Button kind={KINDS.Primary} label="Button 5"/>)]
};