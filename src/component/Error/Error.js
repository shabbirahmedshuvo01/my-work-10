import React from 'react';
import lazyCat from '../../images/error/error.jpg'

const Error = () => {
    return (
        <div>
            <h2 className='text-danger m-5'> 🥺404 this page not found 🥺</h2>
            <br />
            <img style={{ height: '600px', width: '800px' }} src={lazyCat} alt="" />
        </div>
    );
};

export default Error;