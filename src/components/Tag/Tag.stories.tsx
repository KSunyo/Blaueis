import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { KINDS, TYPES } from "../../values/constants";
import Tag from "./Tag";

export default {
    title: "components/Tag",
    component: Tag,
    argTypes: {
        kind: { control: 'select', options: Object.keys(KINDS), mapping: KINDS, defaultValue: KINDS.Primary },
        type: { control: 'select', options: Object.keys(TYPES), mapping: TYPES, defaultValue: TYPES.Default },
    }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
    label: "1/2",
    // @ts-ignore
    kind: KINDS.Secondary
};

export const ArticleTag = Template.bind({});
ArticleTag.args = {
    label: "Design",
    kind: KINDS.Primary,
    // @ts-ignore
    type: TYPES.Compact
};