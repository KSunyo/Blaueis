import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Card, {Orientation} from "./Card";

export default {
  title: "blaueis/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Article = Template.bind({});
Article.args = {
  title: "FireHome: a universal multimedia device that meets the post-covid expectations",
  description: "During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.",
  cover: "https://images.unsplash.com/photo-1653856289645-8601ab0e422f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
  coverAlt: "An artic view.",
  link: "https://google.com",
  width: 700,
};

export const ArticleMobile = Template.bind({});
ArticleMobile.args = {
  title: "FireHome: a universal multimedia device that meets the post-covid expectations",
  description: "During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.",
  cover: "https://images.unsplash.com/photo-1653856289645-8601ab0e422f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
  coverAlt: "An artic view.",
  link: "https://google.com",
  width: 335,
  orientation: Orientation.COLUMN
};