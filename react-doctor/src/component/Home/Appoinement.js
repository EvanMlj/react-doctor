import React from "react";
import Section from "../Section";
import ImgForm from "../../assets/images/about/img-3.jpg"
import { Form } from "../Form";

export default function Appoinement(){
    
    return(
        <Section className="section appoinment">
                <div className="row align-items-center">
			<div className="col-lg-6 ">
				<div className="appoinment-content">
					<img src={ImgForm} alt="" className="img-fluid"/>
					<div className="emergency">
						<h2 className="text-lg"><i className="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
					</div>
				</div>
			</div>
			<div className="col-lg-6 col-md-10 ">
				<div className="appoinment-wrap mt-5 mt-lg-0">
					<h2 className="mb-2 title-color">Book appoinment</h2>
					<p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>

                    <Form/>
                <div/>
            </div>
			</div>
		</div>
        </Section>
    )
}