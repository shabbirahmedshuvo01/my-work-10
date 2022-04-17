import React from 'react';

const Services = () => {
    const services = [
        { id: 1, name: 'Medicine Care', price: 500, description: "The care is for any human. We gave you some test and report check, finally I gave you treatment" },
        { id: 2, name: 'Body Checkup', price: 3000, description: "The care is for rutine Check. We gave you some test and report check, finally I gave you treatment" },
        { id: 3, name: 'Health Care', price: 5000, description: "The care is for any human. We gave you some test and report check, finally I gave you treatment" },
        { id: 4, name: 'Home Care', price: 2000, description: "The care is for any human. We gave you some test and report check, finally we gave you treatment" }
    ]
    return (
        <div>
            {
                services.map(service => console.log(service))
            }
        </div>
    );
};

export default Services;