import React from "react";
import {render} from "@testing-library/react";

import Button, {Kind} from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!"  kind={Kind.PRIMARY}/>);
  });
});