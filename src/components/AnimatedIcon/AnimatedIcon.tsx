import React from "react";
import {ANIMATION_STATES, DIRECTIONS, ICONS, SIZES} from "../../values/constants";
import { IconType, IconKind, IconSize } from "../Icon/Icon";
import ChaseAnimation from "./animations/ChaseAnimation/ChaseAnimation";
import NudgeAnimation from "./animations/NudgeAnimation/NudgeAnimation";
import ScaleAnimation from "./animations/ScaleAnimation/ScaleAnimation";

export type AnimationDirection = typeof DIRECTIONS[ keyof typeof DIRECTIONS ];
export type AnimationState = typeof ANIMATION_STATES[ keyof typeof ANIMATION_STATES ];
export type ChaseAnimationProps = { type: "ChaseAnimation", direction: AnimationDirection, rotation?: number };
export type NudgeAnimationProps = { type: "NudgeAnimation", direction: AnimationDirection, rotation?: number };
export type ScaleAnimationProps = { type: "ScaleAnimation", factor: number };
const defaultProps = Object.freeze({ state: ANIMATION_STATES.Initial, size: SIZES.Medium });
export type AnimatedIconProps = { icon: IconType, kind: IconKind, size?: IconSize, state?: AnimationState,
  animation: ChaseAnimationProps | NudgeAnimationProps | ScaleAnimationProps } & typeof defaultProps;

const AnimatedIcon = (props: AnimatedIconProps) : (JSX.Element | null) => {
    const { icon, kind, size, state, animation } = props;
    if (icon == ICONS.None) {
        return null;
    }
    if (animation.type === "ChaseAnimation") {
        return (
            <ChaseAnimation
                icon={icon}
                kind={kind}
                size={size}
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
                size={size}
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
                size={size}
                state={state}
                factor={animation.factor}
            />
        );
    }
    return null;
}

AnimatedIcon.defaultProps = defaultProps;
export default AnimatedIcon;