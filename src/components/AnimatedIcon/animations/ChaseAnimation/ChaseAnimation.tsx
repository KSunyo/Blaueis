import React from "react";
import { animated, useSpring } from "react-spring";
import { ANIMATION_STATES, DIRECTIONS } from "../../../../values/constants";
import { AnimationDirection, AnimationState } from "../../AnimatedIcon";
import Icon, { IconKind, IconType } from "../../../Icon/Icon";
// @ts-ignore
import styles from "./ChaseAnimation.module.scss";
import classNames from "classnames/bind";

const defaultProps = Object.freeze({ rotation: 0 });
type ChaseAnimationProps = { icon: IconType, kind: IconKind, state: AnimationState,
    direction: AnimationDirection, rotation?: number } & typeof defaultProps;

let cx = classNames.bind(styles);

const ChaseAnimation = (props: ChaseAnimationProps) => {
    const { icon, kind, state, direction, rotation } = props;
    const rotate = useSpring({
        to: {transform: `rotate(${rotation}deg)`}
    });
    const toRight = useSpring({
        from: {transform: `translateX(${((state) => state == ANIMATION_STATES.Backward ? 0 : -20)(state)}px)`},
        to: {transform: `translateX(${((state) => state == ANIMATION_STATES.Forward ? 0 : -20)(state)}px)`}
    });
    const toLeft = useSpring({
        from: {transform: `translateX(${((state) => state == ANIMATION_STATES.Forward ? 0 : -20)(state)}px)`},
        to: {transform: `translateX(${((state) => state == ANIMATION_STATES.Backward ? 0 : -20)(state)}px)`}
    });
    const toTop = useSpring({
        from: {transform: `translateY(${((state) => state == ANIMATION_STATES.Backward ? -20 : 0)(state)}px)`},
        to: {transform: `translateY(${((state) => state == ANIMATION_STATES.Forward ? -20 : 0)(state)}px)`}
    });
    const toBottom = useSpring({
        from: {transform: `translateY(${((state) => state == ANIMATION_STATES.Forward ? -20 : 0)(state)}px)`},
        to: {transform: `translateY(${((state) => state == ANIMATION_STATES.Backward ? -20 : 0)(state)}px)`}
    });

    if (direction == DIRECTIONS.ToLeft || direction == DIRECTIONS.ToRight) {
        return (
            <animated.div className={cx('animationContainer')} style={rotate}>
                <animated.div
                    className={cx('iconContainer', 'leftRightContainer')}
                    style={direction == DIRECTIONS.ToLeft ? toLeft : toRight}
                >
                    <span><Icon kind={kind} type={icon}/></span>
                    <span><Icon kind={kind} type={icon}/></span>
                </animated.div>
            </animated.div>
        );
    } else if (direction == DIRECTIONS.ToTop || direction == DIRECTIONS.ToBottom) {
        return (
            <animated.div className={styles.animationContainer} style={rotate}>
                <animated.div
                    className={cx('iconContainer', 'topBottomContainer')}
                    style={direction == DIRECTIONS.ToTop ? toTop : toBottom}
                >
                    <span><Icon kind={kind} type={icon}/></span>
                    <span><Icon kind={kind} type={icon}/></span>
                </animated.div>
            </animated.div>
        );
    }
    return null;
}

ChaseAnimation.defaultProps = defaultProps;
export default ChaseAnimation;