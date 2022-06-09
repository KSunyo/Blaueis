import React, {useState} from "react";
import Icon, {IconKind, IconType} from "../Icon/Icon";
// @ts-ignore
import styles from "./IconButton.module.scss";
import AnimatedIcon, {ChaseAnimationProps, NudgeAnimationProps, ScaleAnimationProps, AnimationState} from "../AnimatedIcon/AnimatedIcon";

export enum Kind {
	PRIMARY,
	SECONDARY
}

export enum Size {
	SMALL,
	LARGE,
}

export enum Shape {
	SQUARE,
	CIRCLE
}

export interface IconButtonProps {
	kind: Kind;
	icon:IconType;
	size?:Size;
	shape?:Shape;
	animation?: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps;
}

const IconButton = ({icon, size, shape, animation} : IconButtonProps) : (JSX.Element | null) => {

	const [hover, setHover] = useState(false);

	if (animation == undefined) {
		return (
			<button
				className={styles.iconButton}
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
				className={styles.iconButton}
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