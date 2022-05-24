import React, {useState} from "react";
import "./Button.scss";
import AnimatedIcon, {AnimationState, Type} from "../AnimatedIcon/AnimatedIcon"

export enum Kind {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY"
}

export enum Icon {
  NONE = "NONE",
  RIGHT_ARROW = "RIGHT_ARROW"
}

export interface ButtonProps {
  kind: Kind;
  label: string;
  startIcon?: Icon;
  endIcon?: Icon;
}

const Button = ({label, kind = Kind.PRIMARY, 
  startIcon = Icon.NONE, endIcon = Icon.NONE}: ButtonProps) => {
  const [animationState, setAnimationState] = useState(AnimationState.DEFAULT);
  const renderIcon = (icon) => {
    if (icon == Icon.RIGHT_ARROW) {
      return (<AnimatedIcon type={kindToIconType(kind)} animation={animationState}/>);
    } else if (icon == Icon.NONE) {
      return null;
    }
  }
  return (
    <button 
      onMouseEnter={() => setAnimationState(AnimationState.FORWARD)}
      onMouseLeave={() => setAnimationState(AnimationState.BACKWARD)}
      className={kindToClassName(kind)}
    >
      <span>
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

const kindToIconType = (kind) => {
  if (kind == Kind.PRIMARY || kind == Kind.SECONDARY) {
    return Type.LIGHT;
  } else if (kind == Kind.TERTIARY) {
    return Type.DARK;
  }
}

export default Button;