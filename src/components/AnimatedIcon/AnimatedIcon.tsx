import React, {useState, useEffect} from "react";
import "./AnimatedIcon.scss";
import RightArrowLight from "./icons/arrow-right-light.svg"
import RightArrowDark from "./icons/arrow-right-dark.svg"

export enum ICON {
  RIGHT_ARROW = "RIGHT_ARROW",
  DOWN_ARROW = "DOWN_ARROW",
  DIAGONAL_ARROW = "DIAGONAL_ARROW"
}

export enum Type {
  LIGHT = "LIGHT",
  DARK = "DARK"
}

export enum AnimationState {
  DEFAULT = "DEFAULT",
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD"
}

export interface IconProps {
  kind: Kind;
  type: Type;
  animation: AnimationState;
}

const AnimatedIcon = ({kind, type = "LIGHT",
  animation = AnimationState.DEFAULT}: IconProps) => {

  if (animation == AnimationState.DEFAULT) {
    return (
      <div className="iconContainer">
        {
        <img src={typeToIcon(type)}/>
        }
      </div>
    );
  } else if (animation == AnimationState.FORWARD) {
    return(
      <div className="iconContainer">
        <img className="left-to-right-animation" src={typeToIcon(type)}/>
        <img src={typeToIcon(type)}/>
      </div>
    );
  } else if (animation == AnimationState.BACKWARD) {
    return(
      <div className="iconContainer">
        <img className="right-to-left-animation" src={typeToIcon(type)}/>
        <img src={typeToIcon(type)}/>
      </div>
    );
  }
};

const typeToIcon = (type) => {
  if (type == Type.LIGHT) {
    return RightArrowLight;
  } else if (type == Type.DARK) {
    return RightArrowDark;
  } else {
    return null;
  }
}

export default AnimatedIcon;