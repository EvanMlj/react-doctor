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
            <Team />
            <Testimonial />
        </div>
    )
} 