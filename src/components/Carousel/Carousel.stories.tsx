import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Carousel from "./Carousel";

export default {
    title: "blaueis/Carousel",
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const CarouselNormal = Template.bind({});
CarouselNormal.args = {

};

export const CarouselCompact = Template.bind({});
CarouselCompact.args = {

};