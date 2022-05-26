import React, {useState} from "react";
import "./Button.scss";
import AnimatedIcon, {AnimationState} from "../AnimatedIcon/AnimatedIcon";
import {IconType, IconKind} from "../Icon/Icon";

export enum Kind {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY"
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
      className={kindToClassName(kind)}
    >
      <span className="button-background-helper"></span>
      <span className="button-container">
        <span>{renderIcon(startIcon)}</span>
        <span>{label}</span>
        <span>{renderIcon(endIcon)}</span>
      </span>
    </button>
  );
};

const kindToClassName = (kind) => {
  if (kind == Kind.PRIMARY) {
    return "primary";
  } else if (kind == Kind.SECONDARY) {
    return "secondary";
  } else if (kind == Kind.TERTIARY) {
    return "tertiary";
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