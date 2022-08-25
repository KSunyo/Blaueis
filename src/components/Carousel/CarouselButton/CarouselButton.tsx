import React, {MouseEventHandler, useState} from "react";
import classNames from 'classnames/bind';
import Icon, {KINDS, IconType} from "../../Icon/Icon";
//@ts-ignore
import styles from "./CarouselButton.module.scss";

type CarouselButtonProps = { label: string, startIcon?: IconType, endIcon?: IconType, disabled?: boolean,
    touch?: boolean, onClick?: MouseEventHandler } & typeof defaultProps;

const defaultProps = Object.freeze({disabled: false, touch: false});

let cx = classNames.bind(styles);

const CarouselButton = (props: CarouselButtonProps) => {
    const { label, startIcon, endIcon, disabled, touch, onClick } = props;
    const [ hover, setHover ] = useState(false);
    const onClickFunction = (event: React.MouseEvent<Element, MouseEvent>) => {if(!disabled && onClick) onClick(event);}

    return (
        <button
            className={cx('CarouselButton', { isDisabled: disabled }, { isTouch: touch })}// `${disabled ? styles.disabled : ""} ${touch ? styles.touch : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClickFunction}
        >
            <span>{startIcon != undefined ? <Icon type={startIcon} kind={getIconKind(hover, disabled, touch)}/> : null}</span>
            <span>{label}</span>
            <span>{endIcon != undefined ? <Icon type={endIcon} kind={getIconKind(hover, disabled, touch)}/> : null}</span>
        </button>
    );
}

CarouselButton.defaultProps = defaultProps;
export default CarouselButton;

const getIconKind = (hover: boolean, disabled: boolean | undefined, touch: boolean | undefined) => {
    if (disabled || touch) {
        return KINDS.Secondary;
    } else {
        if (hover) {
            return KINDS.Primary;
        } else {
            return KINDS.Secondary;
        }
    }
}