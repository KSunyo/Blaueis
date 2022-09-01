import React from "react";
import {animated, useSpring} from "react-spring";
import { ANIMATION_STATES } from "../../../../values/constants";
import {AnimationState} from "../../AnimatedIcon";
import Icon, {IconKind, IconType} from "../../../Icon/Icon";
//@ts-ignore
import styles from "./ScaleAnimation.module.scss";
import classNames from "classnames/bind";

type ScaleAnimationProps = { icon: IconType, kind: IconKind, state: AnimationState, factor: number };

let cx = classNames.bind(styles);

const ScaleAnimation = (props: ScaleAnimationProps) => {
    const { type, kind, state, factor } = props;
    const scale = useSpring({
        to: {transform: `scale(${state == ANIMATION_STATES.Forward ? factor : 1})`}
    });

    return (
        <animated.div
            className={cx('iconContainer')}
            style={scale}
        >
            <Icon kind={kind} type={type}/>
        </animated.div>
    );
}

export default ScaleAnimation;