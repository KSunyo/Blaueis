import React, {useState} from "react";
import styles from "./Button.module.scss";
import AnimatedIcon, {AnimationState} from "../AnimatedIcon/AnimatedIcon";
import {IconType, IconKind} from "../Icon/Icon";

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
  startIcon = null, endIcon = null}: ButtonProps) => {
  const [animationState, setAnimationState] = useState(AnimationState.DEFAULT);
  const renderIcon = (icon) => {
    if (icon != null) {
      return (
        <AnimatedIcon 
          type={icon} 
          kind={kindToIconKind(kind)} 
          animation={animationState}
          loop={false}/>
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

const kindToStyle = (kind) => {
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

const kindToIconKind = (kind) => {
  if (kind == Kind.PRIMARY || kind == Kind.SECONDARY) {
    return IconKind.LIGHT;
  } else if (kind == Kind.TERTIARY) {
    return IconKind.DARK;
  }
}

export default Button;