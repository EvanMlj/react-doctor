import React from "react";
import Section from "../Section";
import thumb1 from "../../assets/images/team/test-thumb1.jpg" ;
import thumb2 from "../../assets/images/team/test-thumb2.jpg" ;
import thumb3 from "../../assets/images/team/test-thumb3.jpg" ;
import thumb4 from "../../assets/images/team/test-thumb4.jpg" ;
import Carousel from "../Carousel" ; 
 
export default function TestimonialHome(){

    const donneesTestimonalHome = [
        {
            img : thumb1 ,
            title : "Amazing service!",
            author : "John Partho" ,
            message :"They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat." , 
        },
        {
            img : thumb2 ,
            title : "Expert doctors!",
            author : "Mullar Sarth",
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.", 
        },
        {
            img : thumb3 ,
            title : "Good Support!" ,
            author : "Kolis Mullar" ,
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. " , 
        },
        {
            img : thumb4 ,
            title : "Nice Environment!" ,
            author : "Partho Sarothi" ,
            message : "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. " , 
        },
    ]

    return(
        <Section className="section testimonial-2 gray-bg">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section-title text-center">
                        <h2>We served over 5000+ Patients</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 testimonial-wrap-2">
                        <Carousel
                        items={donneesTestimonalHome}/>
                    </div>
                </div>
            </div>
        </Section>
    )
}