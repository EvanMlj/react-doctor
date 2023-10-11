import React from "react";
import Awards from "../../component/About/Awards";
import PageDesc from "../../component/About/PageDesc";
import PageTitle from "../../component/About/PageTitle";
import Service from "../../component/About/Service";
import Team from "../../component/About/Team";
import Testimonial from "../../component/About/Testimonial";

export default function About(){
    return(
        <div>
            <PageTitle />
            <Service />
            <PageDesc />
            <Awards />
            <Team 
                title="Meet Our Specialist"
                presentation="Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles" />
            <Testimonial />
        </div>
    )
} 