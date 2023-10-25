import React from "react";
import Section from "../Section";
import Card from "./Card";
export default function ServiceHome(){

    const CardsProps = [
        {
            icon: "icofont-laboratory text-lg",
            title: "Laboratory services",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            icon: "icofont-heart-beat-alt text-lg",
            title: "Heart Disease",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            icon: "icofont-tooth text-lg",
            title: "Dental Care",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            icon: "icofont-crutch text-lg",
            title: "Body Surgery",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            icon: "icofont-brain-alt text-lg",
            title: "Neurology Surgery",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        },
        {
            icon: "icofont-dna-alt-1 text-lg",
            title: "Gynecology",
            description: "Saepe nulla praesentium eaque omnis perferendis a doloremque."
        }
    ];

    return(
        <Section className="section service gray-bg">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                    <div className="section-title">
                        <h2>Awards winning patient care</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {CardsProps.map((item,index) => (
                    <Card key={index} {...item}/>
                ))}
            </div>

        </Section>
    )
}