import React from 'react';
import doctor from '../../images/doctor01.jpg';
import Services from '../Services/Services';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div>
                <h1 className='mt-5'>Health Treatments...</h1>
            </div>
            <div className='d-flex align-items-center p-5 mt-5 bg-success text-dark bg-opacity-25 justify-content-evenly work'>
                <div>
                    <h2>Dr.Freddie Highmore</h2>
                    <br />
                    <p>Let the young know they will never find a more interesting, more instructive book than the patient himself. <br /> True health care reform cannot happen in Washington. It has to happen in our kitchens, <br /> in our homes, in our communities. All health care is personal</p>
                </div>
                <div>
                    <img style={{ height: '400px', width: '400px' }} src={doctor} alt="" />
                </div>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Header;