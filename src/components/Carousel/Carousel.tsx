import React, {ReactNode, useState} from "react";
import classNames from 'classnames/bind';
import {animated, useSpring} from 'react-spring';
import CarouselButton from "./CarouselButton/CarouselButton";
import {IconType} from "../Icon/Icon";
import Tag from "../Tag";
// @ts-ignore
import styles from "./Carousel.module.scss";
import {TagType} from "../Tag/Tag";

export type Image = { url: string, alt: string };
type CarouselProps = { urls: Image[], compact: boolean, width?: number, leftEnhancer?: () => ReactNode,
    rightEnhancer?: () => ReactNode } & typeof defaultProps;

const defaultProps = Object.freeze({urls: [], compact: false});

let cx = classNames.bind(styles);

const Carousel = (props: CarouselProps) => {
    const { urls, compact, width, leftEnhancer, rightEnhancer } = props;
    const [ imageIndex, setImageIndex ] = useState(0);
    const carouselAnimation = useSpring({
        transform: 'translateX(' + (imageIndex == 0 ? 0 : (imageIndex - 1) * (-100) + (-90)) + '%)'
    });

    return (
        <div
            className={cx('Carousel')}
            style={{width: (width != undefined) ? width + "px" : "auto"}}
        >
            <div className={cx('upperControls')}>
                <span>
                    {leftEnhancer ? leftEnhancer() : null}
                </span>
                <span>
                    {rightEnhancer ? rightEnhancer() : null}
                </span>
            </div>
            <div className={cx('lowerControls')}>
                <CarouselButton
                    label="Previous"
                    disabled={imageIndex == 0}
                    startIcon={IconType.LEFT_ARROW}
                    onClick={()=>setImageIndex(imageIndex - 1)}
                />
                <Tag
                    label={`${imageIndex + 1}/${urls.length}`}
                    type={compact ? TagType.COMPACT : TagType.DEFAULT}
                />
                <CarouselButton
                    label="Next"
                    disabled={imageIndex == urls.length - 1}
                    endIcon={IconType.RIGHT_ARROW}
                    onClick={()=>setImageIndex(imageIndex + 1)}
                />
            </div>
            <animated.div style={carouselAnimation} className={cx('imgHolder')}>
                {urls.map(({url, alt}, i) => <img src={url} key={i} alt={alt}/>)}
            </animated.div>
        </div>
    );
};

Carousel.defaultProps = defaultProps;
export default Carousel;