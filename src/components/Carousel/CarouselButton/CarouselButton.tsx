import React, {MouseEventHandler, useState} from "react";
//@ts-ignore
import styles from "./CarouselButton.module.scss";
import Icon, {IconKind, IconType} from "../../Icon/Icon";

export interface CarouselButtonProps {
    label: string;
    startIcon?: IconType;
    endIcon?: IconType;
    disabled?: boolean;
    touch?: boolean;
    onClick?: MouseEventHandler;
}

const CarouselButton = ({
    label,
    startIcon,
    endIcon,
    disabled = false,
    touch = false,
    onClick = () => {}
}: CarouselButtonProps) => {
    const [hover, setHover] = useState(false);

    const onClickFunction = (event) => {
        if (!disabled) {
            if (onClick) {
                onClick(event);
            }
        }
    }

    return (
        <button
            className={styles.CarouselButton}
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

const getIconKind = (hover: boolean, disabled: boolean | undefined, touch: boolean | undefined) => {
    if (disabled || touch) {
        return IconKind.DARK;
    } else {
        if (hover) {
            return IconKind.LIGHT;
        } else {
            return IconKind.DARK;
        }
    }
}

export default CarouselButton;