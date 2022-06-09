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
    const rotate = useSpring({
        to: {transform: `rotate(${rotation}deg)`}
    });
    const toRight = useSpring({
        from: {transform: `translateX(${((state) => state == AnimationState.BACKWARD ? 0 : -20)(state)}px)`},
        to: {transform: `translateX(${((state) => state == AnimationState.FORWARD ? 0 : -20)(state)}px)`}
    });
    const toLeft = useSpring({
        from: {transform: `translateX(${((state) => state == AnimationState.FORWARD ? 0 : -20)(state)}px)`},
        to: {transform: `translateX(${((state) => state == AnimationState.BACKWARD ? 0 : -20)(state)}px)`}
    });
    const toTop = useSpring({
        from: {transform: `translateY(${((state) => state == AnimationState.BACKWARD ? -20 : 0)(state)}px)`},
        to: {transform: `translateY(${((state) => state == AnimationState.FORWARD ? -20 : 0)(state)}px)`}
    });
    const toBottom = useSpring({
        from: {transform: `translateY(${((state) => state == AnimationState.FORWARD ? -20 : 0)(state)}px)`},
        to: {transform: `translateY(${((state) => state == AnimationState.BACKWARD ? -20 : 0)(state)}px)`}
    });

    if (direction == Direction.TO_LEFT || direction == Direction.TO_RIGHT) {
        return (
            <animated.div className={styles.animationContainer} style={rotate}>
                <animated.div
                    className={`${styles.iconContainer} ${styles.leftRightContainer}`}
                    style={direction == Direction.TO_LEFT ? toLeft : toRight}
                >
                    <span><Icon kind={kind} type={type}/></span>
                    <span><Icon kind={kind} type={type}/></span>
                </animated.div>
            </animated.div>
        );
    } else if (direction == Direction.TO_TOP || direction == Direction.TO_BOTTOM) {
        return (
            <animated.div className={styles.animationContainer} style={rotate}>
                <animated.div
                    className={`${styles.iconContainer} ${styles.topBottomContainer}`}
                    style={direction == Direction.TO_TOP ? toTop : toBottom}
                >
                    <span><Icon kind={kind} type={type}/></span>
                    <span><Icon kind={kind} type={type}/></span>
                </animated.div>
            </animated.div>
        );
    }
    return null;
}

const pickAnimation = (state: AnimationState, def, forward, backward) => {
    if (state == AnimationState.FORWARD) {
        return forward;
    } else if (state == AnimationState.BACKWARD) {
        return backward;
    } else {
        return def;
    }
}

export default ChaseAnimation;