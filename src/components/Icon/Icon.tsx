import React from "react";
import { animated, useSpring } from "react-spring";
import { ArrowUp, ArrowRight, ArrowLeft, ArrowDown, Maximize, Minimize } from "react-feather";
import classNames from 'classnames/bind';
//@ts-ignore
import styles from "./Icon.module.scss";

export type IconType = typeof FIGURES[ keyof typeof FIGURES ];
export type IconKind = typeof KINDS[ keyof typeof KINDS ];
export type IconSize = typeof SIZES[ keyof typeof SIZES ];
type IconProps = { type: IconType; kind?: IconKind, size?: IconSize,
	rotation?: number, alt?: string } & typeof defaultProps;

export const FIGURES = { ArrowUp: 1, ArrowRight: 2, ArrowLeft: 3, ArrowDown: 4, Maximize: 5, Minimize: 6 } as const;
export const KINDS = { Primary: 1, Secondary: 2, Tertiary: 3 } as const;
export const SIZES = { Small: 1, Medium: 2, Large: 3 } as const;
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Medium, rotation: 0, alt: "" });

const colorMap = new Map<IconKind, string>([
	[KINDS.Primary, "#FFFFFF"],
	[KINDS.Secondary, "#1A2026"]
]);

const sizeMap = new Map<IconSize, number>([
	[SIZES.Small, 16],
	[SIZES.Medium, 24],
	[SIZES.Large, 32]
]);

let cx = classNames.bind(styles);

const Icon = (props: IconProps) : (JSX.Element | null) => {
	const { type, kind, size, rotation, alt } = props;
	const rotate = useSpring({
		to: {transform: `rotate(${rotation}deg)`}
	});
	if (type == FIGURES.ArrowUp) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowUp color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == FIGURES.ArrowRight) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowRight color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == FIGURES.ArrowLeft) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowLeft color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == FIGURES.ArrowDown) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowDown color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == FIGURES.Maximize) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<Maximize color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == FIGURES.Minimize) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<Minimize color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	}
	return null;
};

Icon.defaultProps = defaultProps;
export default Icon;