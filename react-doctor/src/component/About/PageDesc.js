import React from "react";
import Section from "../Section";
import SignImg from '../../assets/images/about/sign.png' ;

function PageDesc() {

    return(

    <Section className=" section about-page">
        <div className="row">
			<div className="col-lg-4">
				<h2 className="title-color">Personal care for your healthy living</h2>
			</div>
			<div className="col-lg-8">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
				<img src={SignImg} alt="signature in cursive" className="img-fluid"/>
			</div>
        </div>
    </Section>
    
    )
}

export default PageDesc ; 
