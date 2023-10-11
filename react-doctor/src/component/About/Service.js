import React from "react";
import Section from "../Section";
import Pedia from "../../assets/images/about/about-1.jpg" ;
import Counceling from "../../assets/images/about/about-2.jpg" ;    
import Equipment from "../../assets/images/about/about-3.jpg" ;
import Qualified from "../../assets/images/about/about-4.jpg" ;



function Service(){
    const donnesService = [
        {
            url : Pedia,
            title : "Healthcare for Kids",  
            message : "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .", 
        },
        {
            url : Counceling ,
            title : "Medical Counseling",  
            message : "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .",
        },
        {
            url : Equipment ,
            title : "Modern Equipments",  
            message : "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .",
        },
        {
            url : Qualified ,
            title : "Qualified Doctors",
            message : "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .",
        }
    ]

    return(
        <Section className="feature-page">
            <div className="row">
                {donnesService.map((service, index) => (
                    <div className="col-lg-3 col-md-6" key={index}>
                        <div className="about-block-item mb-5 mb-lg-0">
                            <img src={service.url} alt="service illustration" className="img-fluid w-100"/>
                            <h4 className="mt-3">{service.title}</h4>
                            <p>{service.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Service ;