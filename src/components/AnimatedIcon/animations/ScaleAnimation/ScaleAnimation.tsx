import React from "react";
import {animated, useSpring} from "react-spring";
import {ANIMATION_STATES, SIZES} from "../../../../values/constants";
import {AnimationState} from "../../AnimatedIcon";
import Icon, {IconKind, IconSize, IconType} from "../../../Icon/Icon";
//@ts-ignore
import styles from "./ScaleAnimation.module.scss";
import classNames from "classnames/bind";

type ScaleAnimationProps = { icon: IconType, kind: IconKind, size: IconSize, state: AnimationState, factor: number };

let cx = classNames.bind(styles);

const ScaleAnimation = (props: ScaleAnimationProps) => {
    const { type, kind, size, state, factor } = props;
    const scale = useSpring({
        to: {transform: `scale(${state == ANIMATION_STATES.Forward ? factor : 1})`}
    });

    return (
        <animated.div
            className={cx('iconContainer', {
                small: size == SIZES.Small,
                medium: size == SIZES.Medium,
                large: size == SIZES.Large
            })}
            style={scale}
        >
            <Icon kind={kind} type={type}/>
        </animated.div>
    );
}

export default ScaleAnimation;