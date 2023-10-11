import React from "react";
import Section from "../Section";
import Authenthic from "../../assets/images/about/1.png"
import GlobalHealth from "../../assets/images/about/2.png"
import RetroDesign from "../../assets/images/about/3.png"
import GermanMed from  "../../assets/images/about/4.png"
import AAMC from  "../../assets/images/about/5.png"
import Moccachino from "../../assets/images/about/6.png"



function Awards() {
    
        const donnesAwards = [ // n'ayany que l'url a utilisé, j'utilise un array simple
            Authenthic,
            GlobalHealth,
            RetroDesign,
            GermanMed,
            AAMC,
            Moccachino,
        ];
    return (
        <Section className="section awards">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <h2 className="title-color">Our Doctors achievements </h2>
                    <div className="divider mt-4 mb-5 mb-lg-0"></div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                    {donnesAwards.map((url, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <div className="award-img">
                                    <img src={url} className="img-fluid" alt="logo of organism's awards"></img>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </Section>
    )
}
export default Awards