import React, {useState} from "react";
// @ts-ignore
import styles from "./Carousel.module.scss";
import {animated, useSpring} from 'react-spring';
import CarouselButton from "./CarouselButton/CarouselButton";
import {IconType} from "../Icon/Icon";

export interface CarouselProps {
    urls: string[];
    compact: boolean;
    width?: number;
}

const Carousel = ({urls = [], compact = false, width}: CarouselProps) => {

    const [imageIndex, setImageIndex] = useState(0);
    const carouselAnimation = useSpring({
        transform: "translateX(" + (imageIndex == 0 ? 0 : (imageIndex - 1) * (-100) + (-90)) + "%)"
    });
    urls = [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXh8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1529119513315-c7c361862fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXh8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/file-1646172372557-6258c0de0873image",
        "https://images.unsplash.com/photo-1640653410511-bee9946865ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHV4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    ]
    return (
        <div
            className={styles.Carousel}
            style={{width: (width != undefined) ? width + "px" : "auto"}}
        >
            <div className={styles.controls}>
                <CarouselButton
                    label="Previous"
                    disabled={imageIndex == 0}
                    startIcon={IconType.LEFT_ARROW}
                    onClick={()=>setImageIndex(imageIndex - 1)}
                />
                <CarouselButton
                    label="Next"
                    disabled={imageIndex == urls.length - 1}
                    endIcon={IconType.RIGHT_ARROW}
                    onClick={()=>setImageIndex(imageIndex + 1)}
                />
            </div>
            <animated.div style={carouselAnimation} className={styles.imgHolder}>
                {urls.map((url, i) => <img src={url} key={i}/>)}
            </animated.div>
        </div>
    );
};

export default Carousel;