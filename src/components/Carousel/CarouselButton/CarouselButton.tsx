import React, {useState} from "react";
//@ts-ignore
import styles from "CarouselButton.module.scss";
import Icon, {IconKind, IconType} from "../../Icon/Icon";

export interface CarouselButtonProps {
    label: string;
    startIcon?: IconType;
    endIcon?: IconType;
    disabled: boolean;
    touch: boolean;
}

const CarouselButton = (props: CarouselButtonProps) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            className={styles.CarouselButton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span>{props.startIcon != undefined ? <Icon type={props.startIcon} kind={getIconKind(hover, props.disabled, props.touch)}/> : null}</span>
            <span>{props.label}</span>
            <span>{props.endIcon != undefined ? <Icon type={props.endIcon} kind={getIconKind(hover, props.disabled, props.touch)}/> : null}</span>
        </button>
    );
};

const getIconKind = (hover: boolean, disabled: boolean, touch: boolean) => {
    if (disabled || touch) {
        return IconKind.DARK;
    } else {
        if (hover) {
            return IconKind.DARK;
        } else {
            return IconKind.LIGHT;
        }
    }
}

export default CarouselButton;