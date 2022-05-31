import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "blaueis/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Article = Template.bind({});
Article.args = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet",
  cover: "https://images.unsplash.com/photo-1653856289645-8601ab0e422f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
  link: "https://google.com",
};