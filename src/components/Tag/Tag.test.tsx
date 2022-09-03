import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { KINDS, TYPES } from "../../values/constants";
import Tag from "./Tag";

describe("Default Tag",  () => {
    test("primary", () => {
        render(
            <Tag
                label={"Tag"}
                type={TYPES.Default}
                kind={KINDS.Primary}
            />
        );
    });
    test("secondary", () => {
        render(
            <Tag
                label={"Tag"}
                type={TYPES.Default}
                kind={KINDS.Secondary}
            />
        );
    });
});

describe("Compact Tag",  () => {
    test("primary", () => {
        render(
            <Tag
                label={"Tag"}
                type={TYPES.Compact}
                kind={KINDS.Primary}
            />
        );
    });
    test("secondary", () => {
        render(
            <Tag
                label={"Tag"}
                type={TYPES.Compact}
                kind={KINDS.Secondary}
            />
        );
    });
});