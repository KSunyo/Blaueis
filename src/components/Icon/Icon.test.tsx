import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ICONS, KINDS, SIZES } from "../../values/constants";
import Icon from "./Icon";

describe("Icon",  () => {
    test("renders Icon with default props", () => {
        render(<Icon type={ICONS.Truck}/>);
    });
    test("renders secondary Icon", () => {
        render(
            <Icon
                type={ICONS.Zap}
                kind={KINDS.Secondary}
            />
        );
    });
    test("renders rotated Icon", () => {
        render(
            <Icon
                type={ICONS.Zap}
                kind={KINDS.Secondary}
                rotation={71}
                alt={'an icon'}
                size={SIZES.Large}
            />
        );
    });
});