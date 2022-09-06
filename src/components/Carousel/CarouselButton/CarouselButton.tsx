import React, {MouseEventHandler, useState} from "react";
import classNames from 'classnames/bind';
import {ANIMATION_STATES, DIRECTIONS, KINDS} from "../../../values/constants";
import Icon, { IconType } from "../../Icon/Icon";
//@ts-ignore
import styles from "./CarouselButton.module.scss";
import AnimatedIcon from "../../AnimatedIcon";

const defaultProps = Object.freeze({disabled: false, touch: false});
type CarouselButtonProps = { label: string, startIcon?: IconType, endIcon?: IconType, disabled?: boolean,
    touch?: boolean, onClick?: MouseEventHandler } & typeof defaultProps;

let cx = classNames.bind(styles);

const CarouselButton = (props: CarouselButtonProps) => {
    const { label, startIcon, endIcon, disabled, touch, onClick } = props;
    const [ hover, setHover ] = useState(false);
    const [ active, setActive ] = useState(false);
    const [ animationState, setAnimationState ] = useState(ANIMATION_STATES.Initial);
    const onClickFunction = (event: React.MouseEvent<Element, MouseEvent>) => {if(!disabled && onClick) onClick(event);}

    return (
        <button
            className={cx('CarouselButton', { isDisabled: disabled }, { isTouch: touch })}
            onMouseEnter={() => {
                setHover(true);
                if (!disabled && !touch) setAnimationState(ANIMATION_STATES.Forward);
            }}
            onMouseLeave={() => {
                setHover(false);
                if (!disabled && !touch) setAnimationState(ANIMATION_STATES.Backward);
            }}
            onMouseDown={() => {
                setActive(true);
            }}
            onMouseUp={() => setActive(false)}
            onClick={onClickFunction}
        >
            <span>
                {startIcon != undefined ?
                    <AnimatedIcon
                        icon={startIcon}
                        state={animationState}
                        animation={{type: 'ChaseAnimation', direction: DIRECTIONS.ToLeft}} kind={getIconKind(hover, active, disabled, touch)}/>
                    : null}
            </span>
            <span>{label}</span>
            <span>
                {endIcon != undefined ?
                    <AnimatedIcon
                        icon={endIcon}
                        state={animationState}
                        animation={{type: 'ChaseAnimation', direction: DIRECTIONS.ToRight}} kind={getIconKind(hover, active, disabled, touch)}/>
                    : null}
            </span>
        </button>
    );
}

CarouselButton.defaultProps = defaultProps;
export default CarouselButton;

const getIconKind = (hover: boolean, active: boolean, disabled: boolean | undefined, touch: boolean | undefined) => {
    if (disabled) {
        return KINDS.Secondary;
    } else if (touch) {
        if (active) {
            return KINDS.Primary;
        } else {
            return KINDS.Secondary;
        }
    } else {
        if (hover) {
        } else {
            return KINDS.Secondary;
        }

    }
}