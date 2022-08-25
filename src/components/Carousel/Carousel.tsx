import React, {ReactNode, useState} from "react";
import classNames from 'classnames/bind';
import {animated, useSpring} from 'react-spring';
import CarouselButton from "./CarouselButton/CarouselButton";
import {IconType} from "../Icon/Icon";
import Tag, { TYPES } from "../Tag/Tag";
// @ts-ignore
import styles from "./Carousel.module.scss";

export type Image = { url: string, alt: string };
type CarouselProps = { urls: { url: string, alt: string }[], compact: boolean, width?: number, leftEnhancer?: () => ReactNode,
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
                    touch={compact}
                    startIcon={IconType.LEFT_ARROW}
                    onClick={()=>setImageIndex(imageIndex - 1)}
                />
                <Tag
                    label={`${imageIndex + 1}/${urls.length}`}
                    type={compact ? TYPES.Compact : TYPES.Default}
                />
                <CarouselButton
                    label="Next"
                    disabled={imageIndex == urls.length - 1}
                    touch={compact}
                    endIcon={IconType.RIGHT_ARROW}
                    onClick={()=>setImageIndex(imageIndex + 1)}
                />
            </div>
            <animated.div style={carouselAnimation} className={cx('imgHolder')}>
                { urls.map(({url, alt}, i) => <img src={url} key={i} alt={alt}/>) }
            </animated.div>
        </div>
    );
};

Carousel.defaultProps = defaultProps;
export default Carousel;