import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { ICONS } from "../../values/constants";
import Button from "./Button";

describe("Button",  () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!"/>);
  });
});

describe("Button with start icon",  () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" startIcon={ICONS.ChevronRight}/>);
  });
});

describe("Button with end icon",  () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" startIcon={ICONS.FastForward}/>);
  });
});

describe("Disabled Button",  () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" startIcon={ICONS.FastForward} disabled={true}/>);
  });
});