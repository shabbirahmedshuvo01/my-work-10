import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Log In</h2>
            <form onSubmit={handleSubmit}>
                <input className='m-2 w-25' ref={emailRef} type="email" name="email" id="" placeholder='Email address' required />
                <br />
                <input className='m-2 w-25' ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input
                    className='mx-auto btn btn-primary mt-2' type="submit" value="Log In" />
            </form>
            <p>New here? <Link to={'/register'} className='text-primary pe-auto text-decoration-none'>Please register</Link></p>
        </div>
    );
};

export default Login;