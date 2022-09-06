import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ORIENTATIONS } from "../../values/constants";
import Stack from "./Stack";

describe("Button Group with Stack",  () => {
    test("orientation: row", () => {
        render(
            <Stack orientation={ORIENTATIONS.Row}>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
                <button>Button 4</button>
                <button>Button 5</button>
            </Stack>
        );
    });
    test("orientation: column", () => {
        render(
            <Stack orientation={ORIENTATIONS.Column}>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
                <button>Button 4</button>
                <button>Button 5</button>
            </Stack>
        );
    });
    test("orientation: row-reverse", () => {
        render(
            <Stack orientation={ORIENTATIONS.RowReverse}>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
                <button>Button 4</button>
                <button>Button 5</button>
            </Stack>
        );
    });
    test("orientation: column-reverse", () => {
        render(
            <Stack orientation={ORIENTATIONS.ColumnReverse}>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
                <button>Button 4</button>
                <button>Button 5</button>
            </Stack>
        );
    });
});