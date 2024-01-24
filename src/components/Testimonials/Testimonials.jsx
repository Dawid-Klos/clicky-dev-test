"use client";

import { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';

import SliderNav from './SliderNav/SliderNav';
import { homepageTestimonials } from "data/carousel";

import './Testimonials.scss';


const Testimonials = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
                rotate: 0,
                scale: 0.85,
                depth: 100,
                modifier: 2,
                slideShadows: false,
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            pagination={true}
            modules={[EffectCoverflow]}
            className="swiper"
        >
            {
                homepageTestimonials.map((testimonial, id) => (
                    <SwiperSlide key={id} className="c-testimonial">
                        <Image className="c-testimonial__avatar" src={testimonial.avatar} alt={"Testimonial author - " + testimonial.name + " from " + testimonial.company} />
                        <p className="c-testimonial__content">{testimonial.description}</p>
                        <p className="c-testimonial__author">{testimonial.name} / {testimonial.role} / {testimonial.company}</p>
                        <div className="c-testimonial__background-wrapper">
                            <Image className="c-testimonial__background" src={testimonial.background} alt='' quality={100} fill={true} loading="lazy" />
                        </div>
                    </SwiperSlide>
                ))
            }
            <SliderNav testimonials={homepageTestimonials} activeSlide={activeSlide} />
        </Swiper>
    );
};

export default Testimonials;
