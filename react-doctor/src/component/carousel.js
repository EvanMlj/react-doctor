import React, { Component } from 'react';
import Slider from "react-slick";


export default class Carousel extends Component {
    
    render() {
        const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        vertical:true,
        verticalSwiping:true,
        autoplaySpeed: 6000,
        responsive: [
                {
                breakpoint: 1024,
                settings: {
                slidesToShow:1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },{
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                } 
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };
        
        const donnesCarousel = [
            {
                title : "Amazing service!",
                author : "John Partho", 
                testimonial : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod." 
            },
            {
                title : "Expert doctors!",
                author : "Mullar Sarth",
                testimonial : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
            },
            {
                title : "Good Support!",
                author : "Kolis Mullar",
                testimonial : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
            },
            {
                title : "Nice Environment!",
                author : "Partho Sarothi",
                testimonial : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
            },
            {
                title : "Modern Service!",
                author : "Kolis Mullar",
                testimonial : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod."
            }
        ];

        return (
            <div className='row align-items-center'>
                <div className='col-lg-6 testimonial-wrap offset-lg-6'>
                    <Slider {...settings}>
                        {donnesCarousel.map((carousel, index) => (
                            <div className='carousel-item testimonial-block' key={index}>
                                <div className='client-infos'>
                                    <h4>{carousel.title}</h4>
                                    <span>{carousel.author}</span>
                                </div>
                                <p>{carousel.testimonial}</p>
                                <i className='icofont-quote-right'></i>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
