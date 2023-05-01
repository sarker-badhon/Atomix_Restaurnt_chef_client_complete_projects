import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <Link className="btn normal-case text-4xl" to="/">Atomix</Link>
            </div>

            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    <li> <Link to="/">Home</Link></li>
                    <li>  <Link to="/blog">Blog</Link> </li>
                    <li><Link to="contacts">Contacts</Link></li>
                </ul>

            </div>
            <div className="navbar-end px-3">

                <Link title='profile' className='' to="/profile">Profile</Link>
                <Link className='btn' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;