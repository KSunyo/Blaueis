import React, {ReactNode} from "react";

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
	kind: IconKind,
	alt?: string
}

const Icon = ({type, kind, alt = ""}: IconProps) : (JSX.Element | null) => {
	if (type == IconType.RIGHT_ARROW) {
		if (kind == IconKind.LIGHT) {
			return <img src={RightArrowLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={RightArrowDark} alt={alt}/>;
		}
	} else if (type == IconType.DOWN_ARROW) {
		if (kind == IconKind.LIGHT) {
			return <img src={DownArrowLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={DownArrowDark} alt={alt}/>;
		}
	} else if (type == IconType.UP_RIGHT_ARROW) {
		if (kind == IconKind.LIGHT) {
			return <img src={UpRightArrowLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={UpRightArrowDark} alt={alt}/>;
		}
	} else if (type == IconType.UP_ARROW) {
		if (kind == IconKind.LIGHT) {
			return <img src={UpArrowLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={UpArrowDark} alt={alt}/>;
		}
	}
	return null;
};

export default Icon;