import React from "react";
import Icon, {IconKind, IconType} from "../../../Icon/Icon";
import {AnimationState, Direction} from "../../AnimatedIcon";
//@ts-ignore
import styles from "./NudgeAnimation.module.scss";
import {animated, useSpring} from "react-spring";

export interface NudgeAnimationProps {
    type: IconType;
    kind: IconKind;
    state: AnimationState;
    direction: Direction;
    rotation?: number;
}

const NudgeAnimation = ({type, kind, state, direction, rotation = 0}: NudgeAnimationProps) => {
    const rotate = useSpring({
        to: {transform: `rotate(${rotation}deg)`}
    });
    const toRight = useSpring({
        to: {transform: `translateX(${((state) => state == AnimationState.FORWARD ? 15 : 0)(state)}px)`}
    });
    const toLeft = useSpring({
        to: {transform: `translateX(${((state) => state == AnimationState.FORWARD ? -15 : 0)(state)}px)`}
    });
    const toTop = useSpring({
        to: {transform: `translateY(${((state) => state == AnimationState.FORWARD ? -15 : 0)(state)}px)`}
    });
    const toBottom = useSpring({
        to: {transform: `translateY(${((state) => state == AnimationState.FORWARD ? 15 : 0)(state)}px)`}
    });

    if (direction == Direction.TO_LEFT || direction == Direction.TO_RIGHT) {
        return (
            <animated.div style={rotate}>
                <animated.div
                    className={`${styles.iconContainer} ${styles.leftRightContainer}`}
                    style={direction == Direction.TO_LEFT ? toLeft : toRight}
                >
                    <span><Icon kind={kind} type={type}/></span>
                </animated.div>
            </animated.div>
        );
    } else if (direction == Direction.TO_TOP || direction == Direction.TO_BOTTOM) {
        return (
            <animated.div style={rotate}>
                <animated.div
                    className={`${styles.iconContainer} ${styles.topBottomContainer}`}
                    style={direction == Direction.TO_TOP ? toTop : toBottom}
                >
                    <span><Icon kind={kind} type={type}/></span>
                </animated.div>
            </animated.div>
        );
    }
    return null;
}

export default NudgeAnimation;