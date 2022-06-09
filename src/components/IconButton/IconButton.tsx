import React, {useState} from "react";
import Icon, {IconKind, IconType} from "../Icon/Icon";
// @ts-ignore
import styles from "./IconButton.module.scss";
import AnimatedIcon, {
	AnimationState,
	ChaseAnimationProps,
	NudgeAnimationProps,
	ScaleAnimationProps
} from "../AnimatedIcon/AnimatedIcon";

export enum Kind {
	PRIMARY = "PRIMARY",
	SECONDARY = "SECONDARY"
}

export enum Size {
	SMALL = "SMALL",
	LARGE = "LARGE",
}

export enum Shape {
	SQUARE = "SQUARE",
	CIRCLE = "CIRCLE"
}

export interface IconButtonProps {
	kind: Kind;
	icon:IconType;
	size?:Size;
	shape?:Shape;
	animation?: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps;
}

const IconButton = ({kind, icon, size = Size.SMALL, shape = Shape.SQUARE, animation} : IconButtonProps) : (JSX.Element | null) => {

	const [hover, setHover] = useState(false);

	if (animation == undefined) {
		return (
			<button
				className={`${styles.iconButton} ${getKindClass(kind)} ${getShapeClass(shape)} ${getSizeClass(size)}`}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Icon
					type={icon}
					kind={hover ? IconKind.LIGHT : IconKind.DARK}
				/>
			</button>
		);
	} else {
		return (
			<button
				className={`${styles.iconButton} ${getKindClass(kind)} ${getShapeClass(shape)} ${getSizeClass(size)}`}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<AnimatedIcon
					type={icon}
					kind={hover ? IconKind.LIGHT : IconKind.DARK}
					state={getAnimationState(hover)}
					animation={animation}/>
			</button>
		);
	}
}

const getKindClass = (kind: Kind) => {
	if (kind == Kind.PRIMARY) return styles.primary;
	if (kind == Kind.SECONDARY) return styles.secondary;
}

const getIconKind = (kind: Kind, hover: boolean) => {
	if (kind == Kind.PRIMARY) {
		if (hover) {
			return IconKind.LIGHT;
		} else {
			return IconKind.DARK;
		}
	} else if (kind == Kind.SECONDARY) {
		if (hover) {
			return IconKind.DARK;
		} else {
			return IconKind.LIGHT;
		}
	}
}

const getShapeClass = (shape: Shape | undefined) => {
	if (shape == Shape.CIRCLE) return styles.circle;
	if (shape == Shape.SQUARE) return styles.square;
}

const getSizeClass = (size: Size | undefined) => {
	if (size == Size.SMALL) return styles.small;
	if (size == Size.LARGE) return styles.large;
}

const getAnimationState = (hover): AnimationState => {
	if (hover == undefined) {
		return AnimationState.DEFAULT;
	} else {
		if (hover) {
			return AnimationState.FORWARD;
		} else {
			return AnimationState.BACKWARD;
		}
	}
}

export default IconButton;