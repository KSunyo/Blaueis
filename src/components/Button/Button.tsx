import React, {ReactElement, ReactNode, useState} from "react";
import AnimatedIcon, {AnimationState} from "../AnimatedIcon/AnimatedIcon";
import {IconType, IconKind} from "../Icon/Icon";

const styles = require("./Button.module.scss");


export enum Kind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

export interface ButtonProps {
  kind: Kind;
  label: string;
  startIcon?: IconType;
  endIcon?: IconType;
}

const Button = ({label, kind = Kind.PRIMARY,
  startIcon = undefined, endIcon = undefined}: ButtonProps) => {
  const [animationState, setAnimationState] = useState(AnimationState.DEFAULT);
  const renderIcon = (icon: IconType | undefined) : ReactNode => {
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
  return (
    <button 
      onMouseEnter={() => setAnimationState(AnimationState.FORWARD)}
      onMouseLeave={() => setAnimationState(AnimationState.BACKWARD)}
      className={`${styles.Button} ${kindToStyle(kind)}`}
    >
      <span className={styles.buttonBackgroundHelper}></span>
      <span className={styles.buttonContainer}>
        <span>{renderIcon(startIcon)}</span>
        <span>{label}</span>
        <span>{renderIcon(endIcon)}</span>
      </span>
    </button>
  );
};

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