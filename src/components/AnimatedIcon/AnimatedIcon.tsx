import React, {useState, useEffect, ReactNode} from "react";
import Icon, {IconType, IconKind} from "../Icon/Icon";
// @ts-ignore
import styles from "./AnimatedIcon.module.scss";

export enum AnimationState {
  DEFAULT = "DEFAULT",
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD"
}

export enum Direction {
  TO_TOP,
  TO_LEFT,
  TO_RIGHT,
  TO_BOTTOM
}

export interface ChaseAnimation {
  direction: Direction;
  rotation?: number;
}

export interface NudgeAnimation {
  direction: Direction;
}

export interface ScaleAnimation {
  factor: number;
}

export interface AnimatedIconProps {
  type: IconType;
  kind: IconKind;
  state: AnimationState;
  animation: ChaseAnimation | NudgeAnimation | ScaleAnimation;
}

const AnimatedIcon = ({
                        type,
                        kind,
                        state = AnimationState.DEFAULT
}: AnimatedIconProps) : (JSX.Element | null) => {

  if (state == AnimationState.DEFAULT) {
    return (
      <div className={getIconContainerClass(type)}>
        <span><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
      </div>
    );
  } else if (state == AnimationState.FORWARD) {
    return(
      <div className={getIconContainerClass(type)}>
        <span className={getForwardAnimationClass(type)}><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
        <span><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
      </div>
    );
  } else if (state == AnimationState.BACKWARD) {
    return(
      <div className={getIconContainerClass(type)}>
        <span className={getBackwardAnimationClass(type)}><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
        <span><Icon kind={kind} type={(type == IconType.UP_RIGHT_ARROW ? IconType.RIGHT_ARROW : type)}/></span>
      </div>
    );
  }
  return null;
}

const getIconContainerClass = (type: IconType) => {
  if (type == IconType.RIGHT_ARROW) {
    return `${styles.iconContainer} ${styles.rightArrowContainer}`;
  } else if (type == IconType.DOWN_ARROW) {
    return `${styles.iconContainer} ${styles.downArrowContainer}`;
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return `${styles.iconContainer} ${styles.upRightArrowContainer}`;
  }
}

const getForwardAnimationClass = (type: IconType) => {
  if (type == IconType.RIGHT_ARROW) {
    return styles.rightArrowForwardAnimation;
  } else if (type == IconType.DOWN_ARROW) {
    return styles.downArrowForwardAnimation;
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return styles.rightArrowForwardAnimation;
  }
}

const getBackwardAnimationClass = (type: IconType) => {
  if (type == IconType.RIGHT_ARROW) {
    return styles.rightArrowBackwardAnimation;
  } else if (type == IconType.DOWN_ARROW) {
    return styles.downArrowBackwardAnimation;
  } else if (type == IconType.UP_RIGHT_ARROW) {
    return styles.rightArrowBackwardAnimation;
  }
}

export default AnimatedIcon;