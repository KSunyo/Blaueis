import React from "react";
import { animated, useSpring } from "react-spring";
import classNames from 'classnames/bind';
import { ArrowUp, ArrowRight, ArrowLeft, ArrowDown, Maximize, Minimize } from "react-feather";
import { ICONS, KINDS, SIZES, COLORS } from "../../values/constants";
//@ts-ignore
import styles from "./Icon.module.scss";

export type IconType = typeof ICONS[ keyof typeof ICONS ];
export type IconKind = typeof KINDS[ keyof typeof KINDS ];
export type IconSize = typeof SIZES[ keyof typeof SIZES ];
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Medium, rotation: 0, alt: "" });
type IconProps = { type: IconType; kind?: IconKind, size?: IconSize,
	rotation?: number, alt?: string } & typeof defaultProps;

const colorMap = new Map<IconKind, string>([
	[ KINDS.Primary, COLORS.Grayscale00 ],
	[ KINDS.Secondary, COLORS.Grayscale80 ]
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
	if (type == ICONS.ArrowUp) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowUp color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == ICONS.ArrowRight) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowRight color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == ICONS.ArrowLeft) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowLeft color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == ICONS.ArrowDown) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<ArrowDown color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == ICONS.Maximize) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<Maximize color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	} else if (type == ICONS.Minimize) {
		return <animated.div className={cx('Icon')} style={rotate}>
			<Minimize color={colorMap.get(kind)} size={sizeMap.get(size)} alt={alt}/>
		</animated.div>
	}
	return null;
};

Icon.defaultProps = defaultProps;
export default Icon;