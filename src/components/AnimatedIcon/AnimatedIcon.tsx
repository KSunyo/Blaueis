import React, {useState, useEffect, ReactNode} from "react";
import Icon, {IconType, IconKind} from "../Icon/Icon";
// @ts-ignore
import styles from "./AnimatedIcon.module.scss";
import ChaseAnimation from "./animations/ChaseAnimation/ChaseAnimation";
import NudgeAnimation from "./animations/NudgeAnimation/NudgeAnimation";

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

export interface ChaseAnimationProps {
  type: "ChaseAnimation";
  direction: Direction;
  rotation?: number;
}

export interface NudgeAnimationProps {
  type: "NudgeAnimation";
  direction: Direction;
  rotation?: number;
}

export interface ScaleAnimationProps {
  type: "ScaleAnimation";
  factor: number;
}

export interface AnimatedIconProps {
  type: IconType;
  kind: IconKind;
  state: AnimationState;
  animation: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps;
}

const AnimatedIcon = ({
                        type,
                        kind,
                        state = AnimationState.DEFAULT,
                        animation
}: AnimatedIconProps) : (JSX.Element | null) => {

  if (animation.type === "ChaseAnimation") {
    return (
        <ChaseAnimation
            type={type}
            kind={kind}
            state={state}
            direction={animation.direction}
            rotation={animation.rotation ? animation.rotation : 0}
        />
    )
  } else if (animation.type == "NudgeAnimation") {
    return (
        <NudgeAnimation
            type={type}
            kind={kind}
            state={state}
            direction={animation.direction}
            rotation={animation.rotation ? animation.rotation : 0}
        />
    );
  } else if (animation.type == "ScaleAnimation") {

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