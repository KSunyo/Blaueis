import React from "react";
import "./Icon.scss";
import RightArrowLight from "./icons/arrow-right-light.svg"
import RightArrowDark from "./icons/arrow-right-dark.svg"
import DownArrowLight from "./icons/arrow-down-light.svg"
import DownArrowDark from "./icons/arrow-down-dark.svg"
import UpRightArrowLight from "./icons/arrow-up-right-light.svg"
import UpRightArrowDark from "./icons/arrow-up-right-dark.svg"

export enum IconType {
  RIGHT_ARROW = "RIGHT_ARROW",
  DOWN_ARROW = "DOWN_ARROW",
  UP_RIGHT_ARROW = "UP_RIGHT_ARROW"
}

export enum IconKind {
  LIGHT = "LIGHT",
  DARK = "DARK"
}

export interface IconProps {
  type: IconType,
  kind: IconKind
}

const Icon = (props: IconProps) => {
	if (props.type == IconType.RIGHT_ARROW) {
		if (props.kind == IconKind.LIGHT) {
			return <img src={RightArrowLight}/>;
		} else if (props.kind == IconKind.DARK) {
			return <img src={RightArrowDark}/>;
		}
	} else if (props.type == IconType.DOWN_ARROW) {
		if (props.kind == IconKind.LIGHT) {
			return <img src={DownArrowLight}/>;
		} else if (props.kind == IconKind.DARK) {
			return <img src={DownArrowDark}/>;
		}
	} else if (props.type == IconType.UP_RIGHT_ARROW) {
		if (props.kind == IconKind.LIGHT) {
			return <img src={UpRightArrowLight}/>;
		} else if (props.kind == IconKind.DARK) {
			return <img src={UpRightArrowDark}/>;
		}
	} else {
		return null;
	}
};

export default Icon;