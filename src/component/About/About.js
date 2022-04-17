import React from 'react';
import shuvo from '../../images/about/dekstop.1.jpg'

const About = () => {
    return (
        <div>
            <div className='d-flex align-items-center p-5 mt-5 bg-success text-dark bg-opacity-25 justify-content-evenly'>
                <div>
                    <h2>Shabbir Ahmed Shuvo</h2>
                    <br />
                    <p>Let us take you into a deeper experience, <br /> make a moment a lasting conveyable memory. Let us help build your tribe. <br />We love what we do and we do what our clients love and work with great <br /> clients all over the world to create thoughtful and purposeful websites</p>
                </div>
                <div>
                    <img style={{ height: '400px', width: '400px' }} src={shuvo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;