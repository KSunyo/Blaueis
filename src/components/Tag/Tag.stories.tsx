import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Tag, {TagType} from "./Tag";


export default {
    title: "blaueis/Tag",
    component: Tag,
    argTypes: {
    }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
    label: "1/2"
};
