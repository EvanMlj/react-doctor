import React from "react";
import Section from "../Section";
import JohnMarshal from "../../assets/images/team/1.jpg";
import MarshalRoot from "../../assets/images/team/2.jpg";
import Siamonjohn from "../../assets/images/team/3.jpg";
import Rishat from "../../assets/images/team/4.jpg";
import Anna from "../../assets/images/team/anna.png" ;
import Souad from "../../assets/images/team/Souad.png";
import Pataton from "../../assets/images/team/pataton.png";

function Team({title, presentation}){
    const donnesTeam=[
        {
            url : JohnMarshal,
            title : "John Marshal",  
            message : "Internist, Emergency Physician",
        },
        {
            url : MarshalRoot,
            title : "Marshal Root",  
            message : "Surgeon, Cardiologist",
        },
        {
            url : Siamonjohn,
            title : "Siamon john",  
            message : "Internist, General Practitioner",
        },
        {
            url : Rishat,
            title : "Rishat Ahmed",  
            message : "Orthopedic Surgeon",
        },
        {
            url : Anna,
            title : "Anna Yang",  
            message : "Chief Cardiac Surgeon",
        },
        {
            url : Souad,
            title: "Souad Bailey",
            message: "Generalist Surgeon"
        },
        {   
            url : Pataton,
            title : "Pataton Webber",
            message : "Chirurchien of Surgery"
        }
    ]

    return(
        <Section className="section-team">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center">
                        <h2 className="mb-4">{title}</h2>
                        <div className="divider mx-auto my-4"></div>
                        <p>{presentation}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {donnesTeam.map((team, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                        <div className="team-block mb-5 mb-lg-0">
                            <img src={team.url} alt="specailist protrait's" className="img-fluid w-100"/>
                        </div>
                        <div className="content">
                            <h4 className="mt-4 mb-0"><a href="doctor-single.html">{team.title}</a></h4>
                            <p>{team.message}</p>   
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Team;