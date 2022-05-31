import React, {useState, useEffect} from "react";
import styles from "./AnimatedIcon.module.scss";
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
        <span><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
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
    return `${styles.iconContainer} ${styles.rightArrowContainer}`;
  } else if (type == IconType.DOWN_ARROW) {
    return `${styles.iconContainer} ${styles.downArrowContainer}`;
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return `${styles.iconContainer} ${styles.upRightArrowContainer}`;
  }
}

const getForwardAnimationClass = (type) => {
  if (type == IconType.RIGHT_ARROW) {
    return styles.rightArrowForwardAnimation;
  } else if (type == IconType.DOWN_ARROW) {
    return styles.downArrowForwardAnimation;
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return styles.rightArrowForwardAnimation;
  }
}

const getBackwardAnimationClass = (type) => {
  if (type == IconType.RIGHT_ARROW) {
    return styles.rightArrowBackwardAnimation;
  } else if (type == IconType.DOWN_ARROW) {
    return styles.downArrowBackwardAnimation;
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return styles.rightArrowBackwardAnimation;
  }
}

export default AnimatedIcon;