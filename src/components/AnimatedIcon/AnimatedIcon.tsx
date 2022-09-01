import React from "react";
import { ANIMATION_STATES, DIRECTIONS } from "../../values/constants";
import { IconType, IconKind } from "../Icon/Icon";
import ChaseAnimation from "./animations/ChaseAnimation/ChaseAnimation";
import NudgeAnimation from "./animations/NudgeAnimation/NudgeAnimation";
import ScaleAnimation from "./animations/ScaleAnimation/ScaleAnimation";
// @ts-ignore
import styles from "./AnimatedIcon.module.scss";

export type AnimationDirection = typeof DIRECTIONS[ keyof typeof DIRECTIONS ];
export type AnimationState = typeof ANIMATION_STATES[ keyof typeof ANIMATION_STATES ];
export type ChaseAnimationProps = { type: "ChaseAnimation", direction: AnimationDirection, rotation?: number };
export type NudgeAnimationProps = { type: "NudgeAnimation", direction: AnimationDirection, rotation?: number };
export type ScaleAnimationProps = { type: "ScaleAnimation", factor: number };
const defaultProps = Object.freeze({ state: ANIMATION_STATES.Initial });
export type AnimatedIconProps = { icon: IconType, kind: IconKind, state?: AnimationState,
  animation: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps } & typeof defaultProps;

const AnimatedIcon = (props: AnimatedIconProps) : (JSX.Element | null) => {
    const { icon, kind, state, animation } = props;
    if (animation.type === "ChaseAnimation") {
        return (
            <ChaseAnimation
                icon={icon}
                kind={kind}
                state={state}
                direction={animation.direction}
                rotation={animation.rotation ? animation.rotation : 0}
            />
        )
    } else if (animation.type == "NudgeAnimation") {
        return (
            <NudgeAnimation
                type={icon}
                kind={kind}
                state={state}
                direction={animation.direction}
                rotation={animation.rotation ? animation.rotation : 0}
            />
        );
    } else if (animation.type == "ScaleAnimation") {
        return (
            <ScaleAnimation
                type={icon}
                kind={kind}
                state={state}
                factor={animation.factor}
            />
        );
    }
    return null;
}

AnimatedIcon.defaultProps = defaultProps;
export default AnimatedIcon;