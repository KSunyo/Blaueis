import React, {ReactNode, MouseEventHandler, useState} from "react";
import AnimatedIcon, {AnimationState, Direction} from "../AnimatedIcon/AnimatedIcon";
import {IconType, IconKind} from "../Icon/Icon";
// @ts-ignore
import styles from "./Button.module.scss";

export const KINDS = {
    Primary: 1,
    Secondary: 2,
    Tertiary: 3,
} as const;

export type ButtonKind = typeof KINDS[keyof typeof KINDS];

export const SIZES = {
    Normal: 1,
    Large: 2,
} as const;

export type ButtonSize = typeof SIZES[keyof typeof SIZES];

export interface ButtonProps {
    kind: ButtonKind;
    size: ButtonSize;
    label: string;
    disabled: boolean;
    touch: boolean;
    startIcon?: IconType;
    endIcon?: IconType;
    onClick?: MouseEventHandler;
}

const Button = ({
                    label,
                    kind = KINDS.Primary,
                    size = SIZES.Normal,
                    disabled = false,
                    touch = false,
                    startIcon,
                    endIcon,
                    onClick = () => {}
}: ButtonProps) => {
    const [animationState, setAnimationState] = useState(AnimationState.DEFAULT);
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
            className={`${styles.Button} ${kindToStyle(kind)} ${disabled ? styles.disabled : ""} ${touch ? styles.touch : ""}`}
        >
            <span className={styles.buttonBackgroundHelper}></span>
            <span className={`${styles.buttonContainer} ${sizeToStyle(size)}`}>
        <span>{renderIcon(kind, startIcon, animationState)}</span>
        <span>{label}</span>
        <span>{renderIcon(kind, endIcon, animationState)}</span>
      </span>
        </button>
    );
};

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
}

const sizeToStyle = (size: ButtonSize) => {
    if (size == SIZES.Large) {
        return styles.large;
    } else if (size == SIZES.Normal) {
        return styles.normal;
    }
}

const kindToStyle = (kind: ButtonKind) => {
    if (kind == KINDS.Primary) {
        return styles.primary;
    } else if (kind == KINDS.Secondary) {
        return styles.secondary;
    } else if (kind == KINDS.Tertiary) {
        return styles.tertiary;
    } else {
        return null;
    }
}

const kindToIconKind = (kind: ButtonKind) : IconKind => {
    if (kind == KINDS.Primary || kind == KINDS.Secondary) {
        return IconKind.LIGHT;
    } else if (kind == KINDS.Tertiary) {
        return IconKind.DARK;
    } else {
        return IconKind.LIGHT;
    }
}

export default Button;