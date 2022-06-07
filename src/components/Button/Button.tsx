import React, {ReactNode, MouseEventHandler, useState} from "react";
import AnimatedIcon, {AnimationState} from "../AnimatedIcon/AnimatedIcon";
import {IconType, IconKind} from "../Icon/Icon";
// @ts-ignore
import styles from "./Button.module.scss";


export enum Kind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export interface ButtonProps {
  kind: Kind;
  label: string;
  disabled: boolean;
  touch: boolean;
  startIcon?: IconType;
  endIcon?: IconType;
  onClick?: MouseEventHandler;
}

const Button = ({
                  label,
                  kind = Kind.PRIMARY,
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
      <span className={styles.buttonContainer}>
        <span>{renderIcon(kind, startIcon, animationState)}</span>
        <span>{label}</span>
        <span>{renderIcon(kind, endIcon, animationState)}</span>
      </span>
    </button>
  );
};

const renderIcon = (kind: Kind, icon: IconType | undefined, animationState: AnimationState) : ReactNode => {
  if (icon != undefined) {
    return (
        <AnimatedIcon
            type={icon}
            kind={kindToIconKind(kind)}
            animation={animationState}/>
    );
  } else {
    return null;
  }
}

const kindToStyle = (kind: Kind) => {
  if (kind == Kind.PRIMARY) {
    return styles.primary;
  } else if (kind == Kind.SECONDARY) {
    return styles.secondary;
  } else if (kind == Kind.TERTIARY) {
    return styles.tertiary;
  } else {
    return null;
  }
}

const kindToIconKind = (kind: Kind) : IconKind => {
  if (kind == Kind.PRIMARY || kind == Kind.SECONDARY) {
    return IconKind.LIGHT;
  } else if (kind == Kind.TERTIARY) {
    return IconKind.DARK;
  } else {
    return IconKind.LIGHT;
  }
}

export default Button;