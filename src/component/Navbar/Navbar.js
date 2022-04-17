import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/about'}>About Me</Link>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;