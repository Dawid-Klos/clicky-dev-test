import { useSwiper } from "swiper/react";

import "./SliderNav.scss";


const SliderNav = ({ testimonials, activeSlide }) => {
    const swiper = useSwiper();

    const handleSlide = (index) => {
        swiper.slideTo(index);
    }

    return (
        <div className="c-slider-nav">
            {testimonials.map((testimonial, index) => (
                <button
                    className={`c-slider-nav__button ${index === activeSlide ? "c-slider-nav__button--active" : ""}`}
                    key={index}
                    onClick={() => handleSlide(index)}
                    type="button"
                    aria-label="Slider indicator"
                ></button>
            ))}
        </div>
    );
};

export default SliderNav;