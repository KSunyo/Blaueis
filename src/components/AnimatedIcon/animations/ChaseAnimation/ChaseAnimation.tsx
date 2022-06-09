import React from "react";
import Icon, {IconKind, IconType} from "../../../Icon/Icon";
import {AnimationState, Direction} from "../../AnimatedIcon";
import styles from "./ChaseAnimation.module.scss";
import {animated, useSpring} from "react-spring";

export interface ChaseAnimationProps {
    type: IconType;
    kind: IconKind;
    state: AnimationState;
    direction: Direction;
    rotation?: number;
}

const ChaseAnimation = ({type, kind, state, direction, rotation = 0}: ChaseAnimationProps) => {
    const rotate = useSpring({transform: `rotate(${rotation})`});
    const toLeft = useSpring({transform: `translateX(${getTranslationMultiplier(state) * 20}px)`});
    const toRight = useSpring({transform: `translateX(${getTranslationMultiplier(state) * 20}px)`});

    if (direction == Direction.TO_LEFT || direction == Direction.TO_RIGHT) {
        return (
            <animated.div className={styles.animationContainer} style={rotate}>
                <div className={`${styles.iconContainer} ${styles.leftRightContainer}`}>
                    <animated.span style={direction == Direction.TO_LEFT ? toLeft : toRight}><Icon kind={kind} type={type}/></animated.span>
                    <span><Icon kind={kind} type={type}/></span>
                </div>
            </animated.div>
        );
    } else if (direction == Direction.TO_TOP || direction == Direction.TO_BOTTOM) {

    }
    return null;
}

const getTranslationMultiplier = (state: AnimationState) => {
    if (state == AnimationState.FORWARD) {
        return 1;
    } else if (state == AnimationState.BACKWARD) {
        return -1;
    } else {
        return 0;
    }
}

export default ChaseAnimation;