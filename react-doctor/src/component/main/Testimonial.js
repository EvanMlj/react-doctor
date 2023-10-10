import React from "react";
import Carousel from "../carousel";
import Section from "../Section";

function Testimonial({ title }) {
    return (
        <Section className="section-testimonial">
            <div className="container">
            <div class="section-title">
					<h2 class="mb-4"> {title}</h2>
					<div class="divider  my-4"></div>
				</div>
                <Carousel />
            </div>
        </Section>
    );
}

export default Testimonial;