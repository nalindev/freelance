import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import GPS from "../assets/images/EVBeg.jpeg"
import 'swiper/swiper-bundle.css';
import "../css/BlogSlider.css"
const BlogSlider = () => {
    const [eventWebinarsListArray, setEventWebinarsListArray] = useState([
        {
            image_url: GPS,
            heading_1: "",
            heading_2: "Electric Vehicle Battery",
            description: "Leading Manufacturers, Exporters, Wholesaler and Trader of 3.7V/800mAh Electric Vehicle Lithium Ion Battery, 7.4V/2000mAh Electric Vehicle Lithium Ion Battery, 7.4V/2600mAh Electric Vehicle Lithium Ion Battery and 7.4V/4400mAh Electric Vehicle Lithium Ion Battery from Ambala.",
            redirect_url: "Nokia(Bangalore)"
        },
        {
            image_url: GPS,
            heading_1: "",
            heading_2: "GPS Battery",
            description: "Leading Manufacturers, Exporters, Wholesaler and Trader of 3.7V 1000mAh Lithium Ion Battery, 3.7V 1100mAh Lithium Ion Battery, 3.7V 300mAh Lithium Ion Battery, 3.7V 400mAh Lithium Ion Battery, 3.7V 500mAh Lithium Ion Battery, 3.7V 600mAh Lithium Ion Battery, 3.7V 700mAh Lithium Ion Battery, 3.7V 750mAh Lithium Ion Battery and 3.7V 800mAh Lithium Ion Battery from Ambala.",
            redirect_url: "Nokia(Bangalore)"
        },
        {
            image_url: GPS,
            heading_1: "",
            heading_2: "Solar Battery",
            description: "Leading Manufacturers, Exporters, Wholesaler and Trader of 11.1V 18.2Ah Lithium Ion Solar Battery, 7.4V/2600mAh Lithium Ion Solar Battery, 7.4V/4400mAh Lithium Ion Solar Battery and 7.4V2000mAh Lithium Ion Solar Battery from Ambala.",
            redirect_url: "Nokia(Bangalore)"
        },
        {
            image_url: GPS,
            heading_1: "",
            heading_2: "POS Machine Battery",
            description: "Leading Manufacturers, Exporters, Wholesaler and Trader of 11.1V 18.2Ah Lithium Ion Battery, 7.4V 2000mAh Lithium Ion Battery, 7.4V 2600mAh Lithium Ion Battery, 7.4V 600mAh Lithium Ion Battery and 7.4V/4400mAh Lithium Ion Battery from Ambala.",
            redirect_url: "Nokia(Bangalore)"
        }
    ])
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js';
        script.async = true;
        script.onload = () => {
            const swiper = new window.Swiper('.blog-slider', {
                spaceBetween: 30,
                effect: 'fade',
                loop: true,
                mousewheel: {
                    invert: false,
                    eventsTarget: '.blog-slider__wrp',
                    forceToAxis: true,
                },
                pagination: {
                    el: '.blog-slider__pagination',
                    clickable: true,
                },
            });
        };
        document.body.appendChild(script);
        return () => {
            const swiperContainer = document.querySelector('.blog-slider');
            swiperContainer && swiperContainer.swiper && swiperContainer.swiper.destroy();
        };
    }, [eventWebinarsListArray]);
    // console.log(eventWebinarsListArray)
    return (
        <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
                {eventWebinarsListArray.map((data, i) => (
                    <div className="blog-slider__item swiper-slide" >
                        <div className="blog-slider__img">
                            <img
                                src={data.image_url}
                                alt=""
                            />
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">{data.heading_1}</span>
                            <h3 className="blog-slider__title">{data.heading_2}</h3>
                            <div className="blog-slider__text">
                                {data.description}
                            </div>
                            <a href={data.redirect_url} className="blog-slider__button" target="_blank">
                                Read More
                            </a>
                        </div>
                    </div>))}
                {/* // ))
            // } */}
            </div>
            <div className="blog-slider__pagination"></div>
        </div>
    );
};
export default BlogSlider;