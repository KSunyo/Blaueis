import React, {ReactNode} from "react";

const UpArrowLight = require("./icons/arrow-up-light.svg") as string;
const UpArrowDark = require("./icons/arrow-up-dark.svg") as string;
const RightArrowLight = require("./icons/arrow-right-light.svg") as string;
const RightArrowDark = require("./icons/arrow-right-dark.svg") as string;
const LeftArrowLight = require("./icons/arrow-left-light.svg") as string;
const LeftArrowDark = require("./icons/arrow-left-dark.svg") as string;
const DownArrowLight = require("./icons/arrow-down-light.svg") as string;
const DownArrowDark = require("./icons/arrow-down-dark.svg") as string;
const UpRightArrowLight = require("./icons/arrow-up-right-light.svg") as string;
const UpRightArrowDark = require("./icons/arrow-up-right-dark.svg") as string;
const MaximizeLight = require("./icons/maximize-light.svg") as string;
const MaximizeDark = require("./icons/maximize-dark.svg") as string;
const MinimizeLight = require("./icons/minimize-light.svg") as string;
const MinimizeDark = require("./icons/minimize-dark.svg") as string;


export enum IconType {
	UP_ARROW = "UP_ARROW",
  	RIGHT_ARROW = "RIGHT_ARROW",
  	DOWN_ARROW = "DOWN_ARROW",
	LEFT_ARROW = "LEFT_ARROW",
  	UP_RIGHT_ARROW = "UP_RIGHT_ARROW",
	MAXIMIZE = "MAXIMIZE",
	MINIMIZE = "MINIMIZE"
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
	} else if (type == IconType.LEFT_ARROW) {
		if (kind == IconKind.LIGHT) {
			return <img src={LeftArrowLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={LeftArrowDark} alt={alt}/>;
		}
	} else if (type == IconType.MAXIMIZE) {
		if (kind == IconKind.LIGHT) {
			return <img src={MaximizeLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={MaximizeDark} alt={alt}/>;
		}
	} else if (type == IconType.MINIMIZE) {
		if (kind == IconKind.LIGHT) {
			return <img src={MinimizeLight} alt={alt}/>;
		} else if (kind == IconKind.DARK) {
			return <img src={MinimizeDark} alt={alt}/>;
		}
	}
	return null;
};

export default Icon;