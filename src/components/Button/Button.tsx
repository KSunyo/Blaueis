import React, {ReactNode, MouseEventHandler, useState} from "react";
import classNames from 'classnames/bind';
import { KINDS, SIZES, ANIMATION_STATES, DIRECTIONS } from "../../values/constants";
import { IconKind, IconType } from "../Icon/Icon";
import AnimatedIcon, { AnimationState } from "../AnimatedIcon/AnimatedIcon";
import styles from "./Button.module.scss";

type ButtonKind = typeof KINDS[ keyof typeof KINDS ];
type ButtonSize = typeof SIZES[ keyof typeof SIZES ];
const defaultProps = Object.freeze({ kind: KINDS.Primary, size: SIZES.Medium, disabled: false, touch: false });
type ButtonProps = { label: string; kind?: ButtonKind, size?: ButtonSize, disabled?: boolean, touch?: boolean,
    startIcon?: IconType; endIcon?: IconType; onClick?: MouseEventHandler } & typeof defaultProps;

let cx = classNames.bind(styles);

const Button = (props: ButtonProps) => {
    const { label, kind, size, disabled, touch, startIcon, endIcon, onClick } = props;
    const [ animationState, setAnimationState ] = useState(ANIMATION_STATES.Initial);
    const onClickFunction = (event: React.MouseEvent<Element, MouseEvent>) => {if(!disabled && onClick) onClick(event);}

    return (
        <button
            onClick={onClickFunction}
            onMouseEnter={() => {if (!disabled) setAnimationState(ANIMATION_STATES.Forward)}}
            onMouseLeave={() => {if (!disabled) setAnimationState(ANIMATION_STATES.Backward)}}
            className={cx('Button',
                {
                    primary: kind == KINDS.Primary,
                    secondary: kind == KINDS.Secondary,
                    tertiary: kind == KINDS.Tertiary,
                },
                {disabled: disabled},
                {touch: touch}
            )}
        >
            <span className={cx('buttonBackgroundHelper')}></span>
            <span className={cx('buttonContainer',
                {
                    medium: size == SIZES.Medium,
                    large: size == SIZES.Large
                })}
            >
                <span>{renderIcon(kind, startIcon, animationState)}</span>
                <span>{label}</span>
                <span>{renderIcon(kind, endIcon, animationState)}</span>
            </span>
        </button>
    );
};

Button.defaultProps = defaultProps;
export default Button;

const renderIcon = (kind: ButtonKind, icon: IconType | undefined, animationState: AnimationState) : ReactNode => {
    if (icon != undefined) {
        return (
            <AnimatedIcon
                icon={icon}
                kind={kindToIconKind(kind)}
                state={animationState}
                animation={{type: "ChaseAnimation", direction: DIRECTIONS.ToRight}}
            />
        );
    } else {
        return null;
    }
};

const kindToIconKind = (kind: ButtonKind) : IconKind => {
    if ( kind == KINDS.Tertiary ) {
        return KINDS.Secondary;
    } else {
        return KINDS.Primary;
    }
};