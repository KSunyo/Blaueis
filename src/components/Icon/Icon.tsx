import React, {ReactNode} from "react";

const styles = require("./Icon.module.scss");
const UpArrowLight = require("./icons/arrow-up-light.svg") as string;
const UpArrowDark = require("./icons/arrow-up-dark.svg") as string;
const RightArrowLight = require("./icons/arrow-right-light.svg") as string;
const RightArrowDark = require("./icons/arrow-right-dark.svg") as string;
const DownArrowLight = require("./icons/arrow-down-light.svg") as string;
const DownArrowDark = require("./icons/arrow-down-dark.svg") as string;
const UpRightArrowLight = require("./icons/arrow-up-right-light.svg") as string;
const UpRightArrowDark = require("./icons/arrow-up-right-dark.svg") as string;


export enum IconType {
	UP_ARROW = "UP_ARROW",
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

const Icon = (props: IconProps) : (JSX.Element | null) => {
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
	} else if (props.type == IconType.UP_ARROW) {
		if (props.kind == IconKind.LIGHT) {
			return <img src={UpArrowLight}/>;
		} else if (props.kind == IconKind.DARK) {
			return <img src={UpArrowDark}/>;
		}
	}
	return null;
};

export default Icon;