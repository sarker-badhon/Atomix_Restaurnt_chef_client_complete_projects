import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Link to="/">Home</Link>
           <Link to="/blog">Blog</Link>
           <Link to="contacts">Contacts</Link>
           <Link to="/profile">Profile</Link>
        </div>
    );
};

export default Header;