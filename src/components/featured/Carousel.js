import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {
    const sliderRef = useRef(null); // Ref to access the slider

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
    };

    // Set up the event listener for the arrow keys
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                sliderRef.current.slickPrev(); // Move to the previous slide
            } else if (event.key === 'ArrowRight') {
                sliderRef.current.slickNext(); // Move to the next slide
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown); // Clean up event listener on unmount
        };
    }, []);

    return (
        <div className='carrousel_wrapper'
            style={{
                height: `${window.innerHeight}px`
            }}>
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <div className='carrousel_image'
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}></div>
                </div>
                <div>
                    <div className='carrousel_image'
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`
                        }}></div>
                </div>
                <div>
                    <div className='carrousel_image'
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`
                        }}></div>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
