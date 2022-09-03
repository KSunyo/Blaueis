import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import {ICONS, KINDS, SHAPES} from "../../values/constants";
import Carousel from "./Carousel";

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

describe("Carousel without enhancers",  () => {
    test("default", () => {
        render(
            <Carousel
                urls={urls}
            />
        );
    });
    test("compact", () => {
        render(
            <Carousel
                urls={urls}
                compact={true}
            />
        );
    });
});

describe("Carousel with enhancers",  () => {
    test("with left enhancer", () => {
        render(
            <Carousel
                urls={urls}
                leftEnhancer={() => <button onClick={() => alert('hi')}>Hi there</button>}
            />
        );
    });
    test("with right enhancer", () => {
        render(
            <Carousel
                urls={urls}
                compact={true}
                rightEnhancer={() => <button onClick={() => alert('hi')}>Hi there</button>}
            />
        );
    });
    test("with left and right enhancers", () => {
        render(
            <Carousel
                urls={urls}
                compact={true}
                rightEnhancer={() => <button onClick={() => alert('hi')}>Hi there</button>}
                leftEnhancer={() => <button onClick={() => alert('hi')}>Hi there</button>}
            />
        );
    });
});