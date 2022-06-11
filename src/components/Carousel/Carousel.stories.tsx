import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Carousel from "./Carousel";
import IconButton from "../IconButton";
import {Kind, Shape} from "../IconButton/IconButton";
import {IconType} from "../Icon/Icon";

export default {
    title: "blaueis/Carousel",
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const CarouselNormal = Template.bind({});
CarouselNormal.args = {
    width: 500
};

export const CarouselCompact = Template.bind({});
CarouselCompact.args = {
    width: 400,
    rightEnhancer: () => <IconButton kind={Kind.PRIMARY} icon={IconType.MAXIMIZE} shape={Shape.CIRCLE} animation={{type: "ScaleAnimation", factor: 1.5}}/>,
};