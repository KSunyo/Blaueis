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
  cover: "https://firebasestorage.googleapis.com/v0/b/freelance-mail.appspot.com/o/casestudycover.png?alt=media&token=051881ca-db3a-42fe-97cd-a813a9754a8c",
  coverAlt: "An artic view.",
  link: "https://google.com",
  width: 700,
};

export const ArticleVideo = Template.bind({});
ArticleVideo.args = {
  title: "FireHome: a universal multimedia device that meets the post-covid expectations",
  description: "During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.",
  cover: "https://www.w3schools.com/html/movie.mp4",
  isCoverVideo: true,
  coverAlt: "An artic view.",
  link: "https://google.com",
  width: 700,
};

export const ArticleMobile = Template.bind({});
ArticleMobile.args = {
  title: "FireHome: a universal multimedia device that meets the post-covid expectations",
  description: "During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.",
  cover: "https://firebasestorage.googleapis.com/v0/b/freelance-mail.appspot.com/o/casestudycover.png?alt=media&token=051881ca-db3a-42fe-97cd-a813a9754a8c",
  coverAlt: "An artic view.",
  link: "https://google.com",
  width: 335,
  orientation: Orientation.COLUMN
};