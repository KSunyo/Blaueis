import React from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ArrowDown, Maximize, Minimize} from "react-feather";

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

const colorMap = new Map<IconKind, string>([
	[IconKind.LIGHT, "#FFFFFF"],
	[IconKind.DARK, "#1A2026"]
]);

const Icon = ({type, kind, alt = ""}: IconProps) : (JSX.Element | null) => {
	if (type == IconType.UP_ARROW) {
		return <ArrowUp color={colorMap.get(kind)} alt={alt}/>
	} else if (type == IconType.RIGHT_ARROW) {
		return <ArrowRight color={colorMap.get(kind)} alt={alt}/>
	} else if (type == IconType.LEFT_ARROW) {
		return <ArrowLeft color={colorMap.get(kind)} alt={alt}/>
	} else if (type == IconType.DOWN_ARROW) {
		return <ArrowDown color={colorMap.get(kind)} alt={alt}/>
	} else if (type == IconType.MAXIMIZE) {
		return <Maximize color={colorMap.get(kind)} alt={alt}/>
	} else if (type == IconType.MINIMIZE) {
		return <Minimize color={colorMap.get(kind)} alt={alt}/>
	}
	return null;
};

export default Icon;