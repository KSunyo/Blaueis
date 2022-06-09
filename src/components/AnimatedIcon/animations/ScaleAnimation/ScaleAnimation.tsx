import React from "react";
import Icon, {IconKind, IconType} from "../../../Icon/Icon";
import {AnimationState, Direction} from "../../AnimatedIcon";
//@ts-ignore
//import styles from "./NudgeAnimation.module.scss";
import {animated, useSpring} from "react-spring";

export interface ScaleAnimationProps {
    type: IconType;
    kind: IconKind;
    state: AnimationState;
    factor: number;
}

const ScaleAnimation = ({type, kind, state, factor}: ScaleAnimationProps) => {
    const scale = useSpring({
        to: {transform: `scale(${state == AnimationState.FORWARD ? factor : 1})`}
    });

    return (
        <animated.div
            style={scale}
        >
            <span><Icon kind={kind} type={type}/></span>
        </animated.div>
    );
}

export default ScaleAnimation;