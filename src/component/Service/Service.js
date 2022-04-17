import React from 'react';

const Service = ({ service }) => {
    const { name, price, image, description } = service;
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>
    );
};

export default Service;