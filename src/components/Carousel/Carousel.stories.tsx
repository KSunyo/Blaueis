import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { ICONS, KINDS, SHAPES } from "../../values/constants";
import Carousel from "./Carousel";
import IconButton from "../IconButton";

export default {
    title: "blaueis/Carousel",
    argTypes: {
        width: { control: { type: 'range', min: 0, max: 1000, step: 10 }, defaultValue: 0 },
        compact: { defaultValue: false }
    },
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

const urls = [
    {
        url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXh8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
        alt: "Someone working on a diagram on the wall."
    },
    {
        url: "https://images.unsplash.com/photo-1529119513315-c7c361862fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXh8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
        alt: "Man collecting ideas on a notepad under the title Client Side."
    },
    {
        url: "https://images.unsplash.com/file-1646172372557-6258c0de0873image",
        alt: "Older, bearded man working on his computer at the side of a pool and drinking a cocktail."
    },
    {
        url: "https://images.unsplash.com/photo-1640653410511-bee9946865ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHV4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        alt: "A smartphone an a stand, it displays the text 'What large agencies can learn from smaller ones.'"
    },
]

export const CarouselNormal = Template.bind({});
CarouselNormal.args = {
    width: 500,
    // @ts-ignore
    urls: urls
};

export const CarouselCompact = Template.bind({});
CarouselCompact.args = {
    width: 400,
    // @ts-ignore
    urls: urls,
    compact: true,
    rightEnhancer: () => <IconButton kind={KINDS.Primary} icon={ICONS.Minimize} shape={SHAPES.Circle} animation={{type: "ScaleAnimation", factor: 0.75}}/>,
};