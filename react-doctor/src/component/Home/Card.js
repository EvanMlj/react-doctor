import React from "react";


const Card = ({icon, title, description}) => {
    

    return (
    <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-item mb-4">
            <div className="icon d-flex align-items-center">
                <i className={icon}></i>
                <h4 className="mt-3 mb-3">{title}</h4>
            </div>
        <div className="content">
            <p className="mb-4">{description}</p>
        </div>
        </div>
    </div>
    
    )
}


export default Card;