import React from 'react';
import doctor from '../../images/doctor01.jpg'

const Header = () => {
    return (
        <div>
            <div>
                <img src={doctor} alt="" />
            </div>
            <div>
                <h3>Dr.Freddie Highmore</h3>
                <p>Let the young know they will never find a more interesting, more instructive book than the patient himself. True health care reform cannot happen in Washington. It has to happen in our kitchens, in our homes, in our communities. All health care is personal</p>
            </div>
        </div>
    );
};

export default Header;