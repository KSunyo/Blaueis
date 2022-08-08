import React, {ReactNode, MouseEventHandler, useState} from "react";
import classNames from 'classnames/bind';
import AnimatedIcon, {AnimationState, Direction} from "../AnimatedIcon/AnimatedIcon";
import {IconType, IconKind} from "../Icon/Icon";
// @ts-ignore
import styles from "./Button.module.scss";

type ButtonKind = typeof KINDS[ keyof typeof KINDS ];
type ButtonSize = typeof SIZES[ keyof typeof SIZES ];
type ButtonProps = { label: string; kind?: ButtonKind, size?: ButtonSize, disabled?: boolean, touch?: boolean,
    startIcon?: IconType; endIcon?: IconType; onClick?: MouseEventHandler } & typeof defaultProps;

export const KINDS = { Primary: 1, Secondary: 2, Tertiary: 3 } as const;
export const SIZES = { Normal: 1, Large: 2 } as const;
const defaultProps = { kind: KINDS.Primary, size: SIZES.Normal, disabled: false, touch: false };

let cx = classNames.bind(styles);

const Button = (props: ButtonProps) => {
    const { label, kind, size, disabled, touch, startIcon, endIcon, onClick } = props;
    const [ animationState, setAnimationState ] = useState(AnimationState.DEFAULT);
    const onClickFunction = (event: React.MouseEvent<Element, MouseEvent>) => {
        if (!disabled && onClick) {
            onClick(event);
        }
    }

    return (
        <button
            onClick={onClickFunction}
            onMouseEnter={() => setAnimationState(AnimationState.FORWARD)}
            onMouseLeave={() => setAnimationState(AnimationState.BACKWARD)}
            className={cx('Button',
                {
                    primary: kind == KINDS.Primary,
                    // @ts-ignore
                    secondary: kind == KINDS.Secondary,
                    // @ts-ignore
                    tertiary: kind == KINDS.Tertiary,
                },
                {disabled: disabled},
                {touch: touch}
            )}
        >
            <span className={cx('buttonBackgroundHelper')}></span>
            <span className={cx('buttonContainer',
                {
                    normal: size == SIZES.Normal,
                    // @ts-ignore
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
                type={icon}
                kind={kindToIconKind(kind)}
                state={animationState}
                animation={{type: "ChaseAnimation", direction: Direction.TO_RIGHT}}
            />
        );
    } else {
        return null;
    }
};

const kindToIconKind = (kind: ButtonKind) : IconKind => {
    if (kind == KINDS.Primary || kind == KINDS.Secondary) {
        return IconKind.LIGHT;
    } else if (kind == KINDS.Tertiary) {
        return IconKind.DARK;
    } else {
        return IconKind.LIGHT;
    }
};