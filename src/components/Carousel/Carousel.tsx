import React, {ReactNode, useState} from "react";
// @ts-ignore
import styles from "./Carousel.module.scss";
import {animated, useSpring} from 'react-spring';
import CarouselButton from "./CarouselButton/CarouselButton";
import {IconType} from "../Icon/Icon";
import Tag from "../Tag";

export interface Image {
    url: string;
    alt: string;
}

export interface CarouselProps {
    urls: Image[];
    compact: boolean;
    width?: number;
    leftEnhancer?: () => ReactNode;
    rightEnhancer?: () => ReactNode;
}

const Carousel = ({urls = [], compact = false, width, leftEnhancer, rightEnhancer}: CarouselProps) => {

    const [imageIndex, setImageIndex] = useState(0);
    const carouselAnimation = useSpring({
        transform: "translateX(" + (imageIndex == 0 ? 0 : (imageIndex - 1) * (-100) + (-90)) + "%)"
    });

    return (
        <div
            className={styles.Carousel}
            style={{width: (width != undefined) ? width + "px" : "auto"}}
        >
            <div className={styles.upperControls}>
                <span>
                    {leftEnhancer ? leftEnhancer() : null}
                </span>
                <span>
                    {rightEnhancer ? rightEnhancer() : null}
                </span>
            </div>
            <div className={styles.lowerControls}>
                <CarouselButton
                    label="Previous"
                    disabled={imageIndex == 0}
                    startIcon={IconType.LEFT_ARROW}
                    onClick={()=>setImageIndex(imageIndex - 1)}
                />
                <Tag
                    label={`${imageIndex + 1}/${urls.length}`}
                    compact={compact}
                />
                <CarouselButton
                    label="Next"
                    disabled={imageIndex == urls.length - 1}
                    endIcon={IconType.RIGHT_ARROW}
                    onClick={()=>setImageIndex(imageIndex + 1)}
                />
            </div>
            <animated.div style={carouselAnimation} className={styles.imgHolder}>
                {urls.map(({url, alt}, i) => <img src={url} key={i} alt={alt}/>)}
            </animated.div>
        </div>
    );
};

export default Carousel;