import React, {useState} from "react";
import classNames from 'classnames/bind';
import { ICONS, KINDS, SHAPES, SIZES } from "../../values/constants";
import Icon from "../Icon/Icon";
import AnimatedIcon, { AnimationState, ChaseAnimationProps,
	NudgeAnimationProps, ScaleAnimationProps } from "../AnimatedIcon/AnimatedIcon";
// @ts-ignore
import styles from "./IconButton.module.scss";

export type IconButtonFigure = typeof ICONS[ keyof typeof ICONS ];
export type IconButtonKind = typeof KINDS[ keyof typeof KINDS ];
export type IconButtonSize = typeof SIZES[ keyof typeof SIZES ];
export type IconButtonShape = typeof SHAPES[ keyof typeof SHAPES ];
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Medium, shape: SHAPES.Square });
type IconButtonProps = { icon: IconButtonFigure, kind?: IconButtonKind, size?: IconButtonSize, shape?: IconButtonShape,
	animation?: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps } & typeof defaultProps;

let cx = classNames.bind(styles);

const IconButton = (props : IconButtonProps) : (JSX.Element | null) => {
	const { icon, kind, size, shape, animation } = props;
	const [ hover, setHover ] = useState(false);

	if (animation == undefined) {
		return (
			<button
				className={cx('IconButton',
					{
						primary: kind == KINDS.Primary,
						secondary: kind == KINDS.Secondary
					},
					{
						circle: shape == SHAPES.Circle,
						square: shape == SHAPES.Square
					},
					{
						small: size == SIZES.Small,
						large: size == SIZES.Large
					}
				)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Icon
					type={icon}
					kind={hover ? KINDS.Primary : KINDS.Secondary}
				/>
			</button>
		);
	} else {
		return (
			<button
				className={cx('IconButton',
					{
						primary: kind == KINDS.Primary,
						secondary: kind == KINDS.Secondary
					},
					{
						circle: shape == SHAPES.Circle,
						square: shape == SHAPES.Square
					},
					{
						small: size == SIZES.Small,
						large: size == SIZES.Large
					}
				)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<AnimatedIcon
					type={icon}
					kind={hover ? KINDS.Primary : KINDS.Secondary}
					state={getAnimationState(hover)}
					animation={animation}/>
			</button>
		);
	}
}

IconButton.defaultProps = defaultProps;
export default IconButton;

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

