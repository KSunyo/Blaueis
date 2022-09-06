import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import {DIRECTIONS, ICONS, KINDS, SHAPES, SIZES} from "../../values/constants";
import IconButton from "./IconButton";

describe("IconButton",  () => {
    test("renders an IconButton with simple (non-animated) Icon", () => {
        render(
            <IconButton
                icon={ICONS.Aperture}
                kind={KINDS.Secondary}
                size={SIZES.Large}
                shape={SHAPES.Circle}
            />
        );
    });
    test("renders an IconButton with AnimatedIcon", () => {
        render(
            <IconButton
                icon={ICONS.Aperture}
                kind={KINDS.Tertiary}
                size={SIZES.Large}
                shape={SHAPES.Square}
                animation={{type:"ChaseAnimation", direction: DIRECTIONS.ToBottom}}
            />
        );
    });
});