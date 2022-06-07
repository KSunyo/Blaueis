import React, {useState} from "react";
// @ts-ignore
import styles from "./Carousel.module.scss";

export interface CarouselProps {
    compact: boolean;
}

const Carousel = ({compact = false}: CarouselProps) => {

    return (
        <div>
            Carousel
        </div>
    );
};

export default Carousel;