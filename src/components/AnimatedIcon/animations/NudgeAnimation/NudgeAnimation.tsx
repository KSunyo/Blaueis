import React from "react";
import {animated, useSpring} from "react-spring";
import { ANIMATION_STATES, DIRECTIONS } from "../../../../values/constants";
import { AnimationState, AnimationDirection } from "../../AnimatedIcon";
import Icon, {IconKind, IconType} from "../../../Icon/Icon";
//@ts-ignore
import styles from "./NudgeAnimation.module.scss";
import classNames from "classnames/bind";

const defaultProps = Object.freeze({ rotation: 0 });
type NudgeAnimationProps = { icon: IconType, kind: IconKind, state: AnimationState,
    direction: AnimationDirection, rotation?: number } & typeof defaultProps;

let cx = classNames.bind(styles);

const NudgeAnimation = (props: NudgeAnimationProps) => {
    const { type, kind, state, direction, rotation } = props;
    const rotate = useSpring({
        to: {transform: `rotate(${rotation}deg)`}
    });
    const toRight = useSpring({
        to: {transform: `translateX(${((state) => state == ANIMATION_STATES.Forward ? 15 : 0)(state)}px)`}
    });
    const toLeft = useSpring({
        to: {transform: `translateX(${((state) => state == ANIMATION_STATES.Forward ? -15 : 0)(state)}px)`}
    });
    const toTop = useSpring({
        to: {transform: `translateY(${((state) => state == ANIMATION_STATES.Forward ? -15 : 0)(state)}px)`}
    });
    const toBottom = useSpring({
        to: {transform: `translateY(${((state) => state == ANIMATION_STATES.Forward ? 15 : 0)(state)}px)`}
    });

    if (direction == DIRECTIONS.ToLeft || direction == DIRECTIONS.ToRight) {
        return (
            <animated.div style={rotate}>
                <animated.div
                    className={cx('iconContainer', 'leftRightContainer')}
                    style={direction == DIRECTIONS.ToLeft ? toLeft : toRight}
                >
                    <span><Icon kind={kind} type={type}/></span>
                </animated.div>
            </animated.div>
        );
    } else if (direction == DIRECTIONS.ToTop || direction == DIRECTIONS.ToBottom) {
        return (
            <animated.div style={rotate}>
                <animated.div
                    className={cx('iconContainer', 'topBottomContainer')}
                    style={direction == DIRECTIONS.ToTop ? toTop : toBottom}
                >
                    <span><Icon kind={kind} type={type}/></span>
                </animated.div>
            </animated.div>
        );
    }
    return null;
}

NudgeAnimation.defaultProps = defaultProps;
export default NudgeAnimation;