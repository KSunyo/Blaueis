import React, {useState, useEffect, ReactNode} from "react";
import Icon, {IconType, IconKind} from "../Icon/Icon";
// @ts-ignore
import styles from "./AnimatedIcon.module.scss";
import ChaseAnimation from "./animations/ChaseAnimation/ChaseAnimation";
import NudgeAnimation from "./animations/NudgeAnimation/NudgeAnimation";
import ScaleAnimation from "./animations/ScaleAnimation/ScaleAnimation";

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
    return (
        <ScaleAnimation
            type={type}
            kind={kind}
            state={state}
            factor={animation.factor}
        />
    );
  }
  return null;
}

export default AnimatedIcon;