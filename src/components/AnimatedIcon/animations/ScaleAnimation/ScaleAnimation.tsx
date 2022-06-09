import React from "react";
import Icon, {IconKind, IconType} from "../../../Icon/Icon";
import {AnimationState, Direction} from "../../AnimatedIcon";
//@ts-ignore
import styles from "./ScaleAnimation.module.scss";
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
            className={styles.iconContainer}
            style={scale}
        >
            <Icon kind={kind} type={type}/>
        </animated.div>
    );
}

export default ScaleAnimation;