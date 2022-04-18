import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OtherLogin from '../OtherLogin/OtherLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email');
        }
        else {
            toast('please enter your email address');
        }
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
            <p>forget password? <button onClick={resetPassword} className='text-primary pe-auto text-decoration-none btn btn-link'>reset password</button></p>
            <OtherLogin></OtherLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;