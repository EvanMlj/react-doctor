import React from "react";
import Section from "../Section";

export default function Features(){
    const donneesFeatures = [
        {
            icon : "icofont-surgeon-alt",
            span : "24 Hours Service",
            title : "Online Appointement",
            message : "Get ALl time support for emergency.We have introduced the principle of family medicine",
            button : 
                {
                link : "appoinment.html",
                class : "btn btn-main btn-round-full",
                label : "Make appoinment"
                }
            
        },
        {
            icon : "icofont-ui-clock",
            span : "Timing schedule",
            title : "Online Appointement",
            message : "Working Hours",
            submessage : [
                {
                    title : "Sun - Wed : ",
                    message : "8:00 - 17:00",
                },
                {
                    title : "Thu - Fri : ",
                    message : "9:00 - 17:00",
                },
                {
                    title : "Sat - sun : ",
                    message : "10:00 - 17:00",
                },
            ]
        },
        {
            icon : "icofont-support",
            span : "Emergency Cases",
            title : "1-800-123-456",
            message : "Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency."
        }
    ]
    return(
        <Section className="feature">
        <div className="row">
            <div className="col-lg-12">
            <div className="feature-block d-lg-flex">
                {donneesFeatures.map((feature, index) => (
                    <div className="feature-item mb-5 mb-lg-0" key={index}>
                    <div className="feature-icon mb-4">
                    <i className={feature.icon} />
                    </div>
                    <span>{feature.span}</span>
                    <h4 className="mb-3">{feature.title}</h4>
                    <p className="mb-4">{feature.message}</p>
                    {feature.button && (
                    <a href={feature.button.link} className={feature.button.class}>
                        {feature.button.label}
                    </a>
                )}
                {feature.submessage && (
                    <ul className="w-hours list-unstyled">
                        {feature.submessage.map((sub, subIndex) => (
                        <li className="d-flex justify-content-between" key={subIndex}>
                            <span>{sub.title}</span>
                            <span>{sub.message}</span>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            ))}
            </div>
        </div>
        </div>
    </Section>
    )
}