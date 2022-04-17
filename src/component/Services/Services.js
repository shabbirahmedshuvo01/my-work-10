import React from 'react';
import Service from '../Service/Service';
import img1 from '../../images/serve/check1.jpg';
import img2 from '../../images/serve/check2.jpg';
import img3 from '../../images/serve/check3.jpg';
import img4 from '../../images/serve/check4.jpg';

const Services = () => {
    const services = [
        { id: 1, name: 'Medicine Care', price: 500, image: img1, description: "The care is for any human. We gave you some test and report check, finally I gave you treatment" },
        { id: 2, name: 'Body Checkup', price: 3000, image: img2, description: "The care is for rutine Check. We gave you some test and report check, finally I gave you treatment" },
        { id: 3, name: 'Health Care', price: 5000, image: img3, description: "The care is for any human. We gave you some test and report check, finally I gave you treatment" },
        { id: 4, name: 'Home Care', price: 2000, image: img4, description: "The care is for any human. We gave you some test and report check, finally we gave you treatment" }
    ]
    return (
        <div className='d-flex align-items-center p-5 mt-5 bg-success text-dark bg-opacity-25 justify-content-evenly'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;