import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <form>
                    <input className='m-2' type="text" name="text" id="" placeholder='Your Name' required />
                    <br />
                    <input className='m-2' type="email" name="email" id="" placeholder='Email address' required />
                    <br />
                    <input className='m-2' type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input
                        className='mx-auto btn btn-primary mt-2' type="submit" value="register" />
                </form>
                <p>New here? <Link to={'/register'} className='text-primary pe-auto text-decoration-none'>Please register</Link></p>
            </div>
        </div>
    );
};

export default Register;