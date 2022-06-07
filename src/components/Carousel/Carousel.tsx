import React, {useState} from "react";
// @ts-ignore
import styles from "./Carousel.module.scss";
import { useSpring, animated } from 'react-spring';

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
        "https://images.unsplash.com/photo-1637323988659-8e5cc44d41b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1636352412645-1a17e4ff7c93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1653866576648-a8ca4c79a35c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1653409242754-434b55b8bc25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    ]
    return (
        <div
            className={styles.Carousel}
            style={{width: (width != undefined) ? width + "px" : "auto"}}
            onClick={()=>setImageIndex(imageIndex + 1)}
        >
            <animated.div style={carouselAnimation} className={styles.imgHolder}>
                {urls.map((url, i) => <img src={url} key={i}/>)}
            </animated.div>
        </div>
    );
};

export default Carousel;