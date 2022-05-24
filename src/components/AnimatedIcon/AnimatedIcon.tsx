import React, {useState, useEffect} from "react";
import "./AnimatedIcon.scss";
import Icon, {IconType, IconKind} from "../Icon/Icon"

export enum AnimationState {
  DEFAULT = "DEFAULT",
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD"
}

export interface AnimatedIconProps {
  type: IconType;
  kind: IconKind;
  animation: AnimationState;
}

const AnimatedIcon = ({type, kind, 
  animation = AnimationState.DEFAULT}: AnimatedIconProps) => {
  if (animation == AnimationState.DEFAULT) {
    return (
      <div className={getIconContainerClass(type)}>
        <Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/>
      </div>
    );
  } else if (animation == AnimationState.FORWARD) {
    return(
      <div className={getIconContainerClass(type)}>
        <span className={getForwardAnimationClass(type)}><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
        <span><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
      </div>
    );
  } else if (animation == AnimationState.BACKWARD) {
    return(
      <div className={getIconContainerClass(type)}>
        <span className={getBackwardAnimationClass(type)}><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
        <span><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
      </div>
    );
  }
};

const getIconContainerClass = (type) => {
  if (type == IconType.RIGHT_ARROW) {
    return "icon-container right-arrow-container";
  } else if (type == IconType.DOWN_ARROW) {
    return "icon-container down-arrow-container";
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return "icon-container up-right-arrow-container";
  }
}

const getForwardAnimationClass = (type) => {
  if (type == IconType.RIGHT_ARROW) {
    return "right-arrow-forward-animation";
  } else if (type == IconType.DOWN_ARROW) {
    return "down-arrow-forward-animation";
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return "right-arrow-forward-animation";
  }
}

const getBackwardAnimationClass = (type) => {
  if (type == IconType.RIGHT_ARROW) {
    return "right-arrow-backward-animation";
  } else if (type == IconType.DOWN_ARROW) {
    return "down-arrow-backward-animation";
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return "right-arrow-backward-animation";
  }
}

export default AnimatedIcon;