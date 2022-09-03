import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ICONS, KINDS, DIRECTIONS, ANIMATION_STATES } from "../../values/constants";
import AnimatedIcon from "./AnimatedIcon";

describe("Tests the ChaseAnimation",  () => {
    test("ChaseAnimation, Initial", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Headphones}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Initial}
                animation={{type: 'ChaseAnimation', direction: DIRECTIONS.ToRight}}
            />
        );
    });
    test("ChaseAnimation, Forward", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Airplay}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Forward}
                animation={{type: 'ChaseAnimation', direction: DIRECTIONS.ToTop}}
            />
        );
    });
    test("ChaseAnimation, Backward", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Star}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Backward}
                animation={{type: 'ChaseAnimation', direction: DIRECTIONS.ToLeft}}
            />
        );
    });
});

describe("Tests the NudgeAnimation",  () => {
    test("NudgeAnimation, Initial", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Headphones}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Initial}
                animation={{type: 'NudgeAnimation', direction: DIRECTIONS.ToTop}}
            />
        );
    });
    test("NudgeAnimation, Forward", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Airplay}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Forward}
                animation={{type: 'NudgeAnimation', direction: DIRECTIONS.ToLeft}}
            />
        );
    });
    test("NudgeAnimation, Backward", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Star}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Backward}
                animation={{type: 'NudgeAnimation', direction: DIRECTIONS.ToBottom}}
            />
        );
    });
});

describe("Tests the ScaleAnimation",  () => {
    test("ScaleAnimation, Initial", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Headphones}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Initial}
                animation={{type: 'ScaleAnimation', factor: 0.5}}
            />
        );
    });
    test("ScaleAnimation, Forward", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Airplay}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Forward}
                animation={{type: 'ScaleAnimation', factor: 1.1}}
            />
        );
    });
    test("ScaleAnimation, Backward", () => {
        render(
            <AnimatedIcon
                icon={ICONS.Star}
                kind={KINDS.Primary}
                state={ANIMATION_STATES.Backward}
                animation={{type: 'ScaleAnimation', factor: 4}}
            />
        );
    });
});

