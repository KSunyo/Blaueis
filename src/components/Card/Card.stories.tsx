import React, {Fragment} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Card, { ORIENTATIONS } from "./Card";
import Button from "../Button";
import {KINDS, SIZES} from "../Button/Button";
import {FIGURES, IconType} from "../Icon/Icon";

export default {
    title: "blaueis/Card",
    component: Card,
    argTypes: {
        coverMediaUrl: {
            control: 'text',
            defaultValue: '',
        },
        coverMediaAlt: {
            control: 'text',
            defaultValue: ''
        },
        width: {
            control: { type: 'range', min: 0, max: 1000, step: 10 },
            defaultValue: 0
        },
        height: {
            control: { type: 'range', min: 0, max: 1000, step: 10 },
            defaultValue: 0
        },
        orientation: {
            control: {
                type: "select",
                labels: {
                    1: "Row",
                    2: "Row-reverse",
                    3: "Column",
                    4: "Column-reverse",
                },
            },
            options: Object.keys(ORIENTATIONS),
            mapping: ORIENTATIONS,
            defaultValue: ORIENTATIONS.Row,
        },
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Article = Template.bind({});
Article.args = {
    coverMediaUrl: "https://firebasestorage.googleapis.com/v0/b/freelance-mail.appspot.com/o/casestudycover.png?alt=media&token=051881ca-db3a-42fe-97cd-a813a9754a8c",
    coverMediaAlt: "An Imac computer displaying a webshop.",
    width: 700,
    children: <Fragment>
        <h1 style={{
            fontSize: "22px",
            lineHeight: "130%",
            margin: 0,
            color: "#2B3233"
        }}>FireHome: a universal multimedia device that meets the post-covid expectations</h1>
        <p style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            margin: 0
        }}>During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.</p>
        <Button kind={KINDS.Primary} label="Read more" endIcon={FIGURES.ArrowRight}/>
    </Fragment>
};

export const ArticleVideo = Template.bind({});
ArticleVideo.args = {
    coverMediaUrl: "https://www.w3schools.com/html/movie.mp4",
    coverMediaAlt: "A bear in a shallow river.",
    isCoverMediaVideo: true,
    width: 700,
    children: <Fragment>
        <h1 style={{
            fontSize: "22px",
            lineHeight: "130%",
            margin: 0,
            color: "#2B3233"
        }}>FireHome: a universal multimedia device that meets the post-covid expectations</h1>
        <p style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            margin: 0
        }}>During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.</p>
        <Button kind={KINDS.Primary} label="Read more" endIcon={FIGURES.ArrowRight}/>
    </Fragment>
};

export const ArticleMobile = Template.bind({});
ArticleMobile.args = {
    coverMediaUrl: "https://firebasestorage.googleapis.com/v0/b/freelance-mail.appspot.com/o/casestudycover.png?alt=media&token=051881ca-db3a-42fe-97cd-a813a9754a8c",
    coverMediaAlt: "An Imac computer displaying a webshop.",
    width: 335,
    //@ts-ignore
    orientation: ORIENTATIONS.Column,
    children: <Fragment>
        <h1 style={{
            fontSize: "22px",
            lineHeight: "130%",
            margin: 0,
            color: "#2B3233"
        }}>FireHome: a universal multimedia device that meets the post-covid expectations</h1>
        <p style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "150%",
            margin: 0
        }}>During the 21st century, digital devices advanced quicker than ever before. However, in spite of the market being consolidated, expectations have gotten higher than ever.</p>
        <Button kind={KINDS.Primary} label="Read more" endIcon={FIGURES.ArrowRight}/>
    </Fragment>
};

export const ContactCard = Template.bind({});
ContactCard.args = {
    width: 600,
    children: <div style={{display: "flex", flexDirection: "column", gap: "15px", alignItems: "center"}}>
        <h1 style={{
            fontSize: "22px",
            lineHeight: "130%",
            margin: 0,
            color: "#2B3233"
        }}>Interested in working together?</h1>
        <Button
            kind={KINDS.Primary}
            //@ts-ignore
            size={SIZES.Large}
            label="Get in touch"
            endIcon={FIGURES.ArrowRight}
        />
    </div>
};