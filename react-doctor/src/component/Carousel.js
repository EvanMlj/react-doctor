import React from "react";
import Slider from "react-slick";

const TestimonialCarousel = ({ data }) => {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      vertical: true,
      verticalSwiping: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
    <Slider {...settings}>
        {data.map((testimonial, index) => (
        <div className="testimonial-block" key={index}>
            <div className="client-info">
                <h4>{testimonial.title}</h4>
                <span>{testimonial.author}</span>
            </div>
            <p>{testimonial.message}</p>
            <i className="icofont-quote-right"></i>
        </div>
        ))}
    </Slider>
    );
};

export default TestimonialCarousel;