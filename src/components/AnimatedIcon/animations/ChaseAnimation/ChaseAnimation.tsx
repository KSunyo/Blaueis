import React from "react";
import classNames from "classnames/bind";
import { animated, useSpring } from "react-spring";
import {ANIMATION_STATES, DIRECTIONS, SIZES} from "../../../../values/constants";
import { iconSizeMap } from "../../../../values/maps";
import { AnimationDirection, AnimationState } from "../../AnimatedIcon";
import Icon, { IconKind, IconType, IconSize } from "../../../Icon/Icon";
import styles from "./ChaseAnimation.module.scss";

const defaultProps = Object.freeze({ rotation: 0 });
type ChaseAnimationProps = { icon: IconType, kind: IconKind, size: IconSize, state: AnimationState,
    direction: AnimationDirection, rotation?: number } & typeof defaultProps;

let cx = classNames.bind(styles);

const ChaseAnimation = (props: ChaseAnimationProps) => {
    const { icon, kind, size, state, direction, rotation } = props;
    const SIZE = iconSizeMap.get(size);
    const rotate = useSpring({
        to: {transform: `rotate(${rotation}deg)`}
    });
    const toRight = useSpring({
        from: {transform: `translateX(${((state) => state == ANIMATION_STATES.Backward ? 0 : -SIZE)(state)}px)`},
        to: {transform: `translateX(${((state) => state == ANIMATION_STATES.Forward ? 0 : -SIZE)(state)}px)`}
    });
    const toLeft = useSpring({
        from: {transform: `translateX(${((state) => state == ANIMATION_STATES.Forward ? 0 : -SIZE)(state)}px)`},
        to: {transform: `translateX(${((state) => state == ANIMATION_STATES.Backward ? 0 : -SIZE)(state)}px)`}
    });
    const toTop = useSpring({
        from: {transform: `translateY(${((state) => state == ANIMATION_STATES.Backward ? -SIZE : 0)(state)}px)`},
        to: {transform: `translateY(${((state) => state == ANIMATION_STATES.Forward ? -SIZE : 0)(state)}px)`}
    });
    const toBottom = useSpring({
        from: {transform: `translateY(${((state) => state == ANIMATION_STATES.Forward ? -SIZE : 0)(state)}px)`},
        to: {transform: `translateY(${((state) => state == ANIMATION_STATES.Backward ? -SIZE : 0)(state)}px)`}
    });

    if (direction == DIRECTIONS.ToLeft || direction == DIRECTIONS.ToRight) {
        return (
            <animated.div
                className={cx('animationContainer', {
                    small: size == SIZES.Small,
                    medium: size == SIZES.Medium,
                    large: size == SIZES.Large
                })}
                style={rotate}
            >
                <animated.div
                    className={cx('iconContainer', 'leftRightContainer')}
                    style={direction == DIRECTIONS.ToLeft ? toLeft : toRight}
                >
                    <span className={cx({
                        small: size == SIZES.Small,
                        medium: size == SIZES.Medium,
                        large: size == SIZES.Large
                    })}>
                        <Icon kind={kind} type={icon} size={size}/>
                    </span>
                    <span className={cx({
                        small: size == SIZES.Small,
                        medium: size == SIZES.Medium,
                        large: size == SIZES.Large
                    })}>
                        <Icon kind={kind} type={icon} size={size}/>
                    </span>
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
                    <span className={cx({
                        small: size == SIZES.Small,
                        medium: size == SIZES.Medium,
                        large: size == SIZES.Large
                    })}>
                        <Icon kind={kind} type={icon} size={size}/>
                    </span>
                    <span className={cx({
                        small: size == SIZES.Small,
                        medium: size == SIZES.Medium,
                        large: size == SIZES.Large
                    })}>
                        <Icon kind={kind} type={icon} size={size}/>
                    </span>
                </animated.div>
            </animated.div>
        );
    }
    return null;
}

ChaseAnimation.defaultProps = defaultProps;
export default ChaseAnimation;