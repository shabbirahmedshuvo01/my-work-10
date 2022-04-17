import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Log In</h2>
            <form>
                <input className='m-2 w-25' type="email" name="email" id="" placeholder='Email address' required />
                <br />
                <input className='m-2 w-25' type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input
                    className='mx-auto btn btn-primary mt-2' type="submit" value="Log In" />
            </form>
            <p>New here? <Link to={'/register'} className='text-primary pe-auto text-decoration-none'>Please register</Link></p>
        </div>
    );
};

export default Login;