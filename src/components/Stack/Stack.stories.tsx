import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack, { ORIENTATIONS } from "./Stack";
import Button, {KINDS, SIZES} from "../Button/Button";
import {IconType} from "../Icon/Icon";

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
        },
        orientation: {
            control: {
                type: "select",
                labels: {
                    1: "Row",
                    2: "Row-reverse",
                    3: "Column",
                    4: "Column-reverse"
                },
            },
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