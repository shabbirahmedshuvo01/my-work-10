import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, image, description } = service;

    const navigate = useNavigate();

    const handleDetail = id => {
        navigate(`/service/${id}`);
    }


    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Price: {price}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => handleDetail(id)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;