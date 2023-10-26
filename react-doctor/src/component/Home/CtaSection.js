import React from "react";
import Section from "../Section";
import CountUp, { useCountUp } from 'react-countup';

export default function CtaSection(){
    
    const donneesCtaSection = [
        {
            icon : "icofont-doctor",
            span : 58,
            span2 : " k",
            message :"Happy People",
        },
        {
            icon : "icofont-flag",
            span : 700,
            span2 : " +",
            message :"Surgery Comepleted",
        },
        {
            icon : "icofont-badge",
            span : 40,
            span2 : " +",
            message :"Expert Doctors",
            
        },
        {
            icon : "icon-globe",
            span : 20,
            span2 : "",
            message :"Worldwide Branch",
        }
    ]
    return(
        <div>
            <Section className="cta-section">
                <div className="cta position-relative">
                    <div className="row">
                        {donneesCtaSection.map((cta, index) =>(
                            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                <div className="counter-stat">
                                    
                                    <i className={cta.icon}></i>
                                    <CountUp end={cta.span} suffix={cta.span2} enableScrollSpy="true" scrollSpyDelay="500" />
                                    <p>{cta.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}