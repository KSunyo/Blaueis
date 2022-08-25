import React from "react";
import { ArrowUp, ArrowRight, ArrowLeft, ArrowDown, Maximize, Minimize} from "react-feather";

export type IconType = typeof FIGURES[ keyof typeof FIGURES ];
export type IconKind = typeof KINDS[ keyof typeof KINDS ];
export type IconSize = typeof SIZES[ keyof typeof SIZES ];
type IconProps = { figure: IconType; kind?: IconKind, size?: IconSize,
	rotation?: number, alt?: string } & typeof defaultProps;

export const FIGURES = { ArrowUp: 1, ArrowRight: 2, ArrowLeft: 3, ArrowDown: 4, Maximize: 5, Minimize: 6 } as const;
export const KINDS = { Primary: 1, Secondary: 2, Tertiary: 3 } as const;
export const SIZES = { Small: 1, Normal: 2, Large: 3 } as const;
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Normal, rotation: 0, alt: "" });

const colorMap = new Map<IconKind, string>([
	[KINDS.Primary, "#FFFFFF"],
	[KINDS.Secondary, "#1A2026"]
]);

const Icon = ({type, kind, alt = ""}: IconProps) : (JSX.Element | null) => {
	if (type == FIGURES.ArrowUp) {
		return <ArrowUp color={colorMap.get(kind)} alt={alt}/>
	} else if (type == FIGURES.ArrowRight) {
		return <ArrowRight color={colorMap.get(kind)} alt={alt}/>
	} else if (type == FIGURES.ArrowLeft) {
		return <ArrowLeft color={colorMap.get(kind)} alt={alt}/>
	} else if (type == FIGURES.ArrowDown) {
		return <ArrowDown color={colorMap.get(kind)} alt={alt}/>
	} else if (type == FIGURES.Maximize) {
		return <Maximize color={colorMap.get(kind)} alt={alt}/>
	} else if (type == FIGURES.Minimize) {
		return <Minimize color={colorMap.get(kind)} alt={alt}/>
	}
	return null;
};

Icon.defaultProps = defaultProps;
export default Icon;