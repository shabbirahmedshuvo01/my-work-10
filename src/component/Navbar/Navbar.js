import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    {user ?
                        <button className='btn btn-danger' onClick={handleSingOut}>Sing Out</button>
                        :
                        <Link to={'/login'}>Login</Link>}
                    <Link to={'/about'}>About Me</Link>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;