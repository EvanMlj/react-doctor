import React from "react";
import Features from "../../component/Home/Features";
import Section from "../../component/Section";
import CtaSection from "../../component/Home/CtaSection";
import ServiceHome from "../../component/Home/ServiceHome";
import HomeImg from "../../assets/images/about/img-1.jpg"
import HomeImg2 from "../../assets/images/about/img-2.jpg"
import HomeImg3 from "../../assets/images/about/img-3.jpg"

export default function Home(){

    return(
        <div>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3"></div>
                                <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                                
                                <p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                                <div className="btn-container ">
                                    <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  "></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Features/>
            <Section className="section about">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="about-img">
                            <img src={HomeImg} alt="" className="img-fluid" />
                            <img src={HomeImg2} alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="about-img mt-4 mt-lg-0">
                        <img src={HomeImg3} alt="" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="about-content pl-4 mt-4 mt-lg-0">
                        <h2 className="title-color">Personal care & healthy living</h2>
                        <p className="mt-4 mb-5">
                        We provide the best leading medical service. Nulla perferendis veniam
                        deleniti ipsum officia dolores repellat laudantium obcaecati neque.
                        </p>
                        <a href="service.html" className="btn btn-main-2 btn-round-full btn-icon">
                        Services <i className="icofont-simple-right ml-3"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </Section>
            <CtaSection/>
            <ServiceHome/>
        </div>
    );
}