import React, {useState} from "react";
import classNames from 'classnames/bind';
import Icon from "../Icon/Icon";
import AnimatedIcon, { AnimationState, ChaseAnimationProps,
	NudgeAnimationProps, ScaleAnimationProps } from "../AnimatedIcon/AnimatedIcon";
// @ts-ignore
import styles from "./IconButton.module.scss";

export type IconButtonKind = typeof KINDS[ keyof typeof KINDS ];
export type IconButtonSize = typeof SIZES[ keyof typeof SIZES ];
export type IconButtonFigure = typeof FIGURES[ keyof typeof FIGURES ];
export type IconButtonShape = typeof SHAPES[ keyof typeof SHAPES ];
type IconButtonProps = { icon: IconButtonFigure, kind?: IconButtonKind, size?: IconButtonSize, shape?: IconButtonShape,
	animation?: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps } & typeof defaultProps;

export const FIGURES = { ArrowUp: 1, ArrowRight: 2, ArrowLeft: 3, ArrowDown: 4, Maximize: 5, Minimize: 6 } as const;
export const KINDS = { Primary: 1, Secondary: 2, Tertiary: 3 } as const;
export const SIZES = { Small: 1, Medium: 2, Large: 3 } as const;
export const SHAPES = { Square: 1, Circle: 2} as const;
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Medium, shape: SHAPES.Square });

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

