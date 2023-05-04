import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handlerLogOut = () => {
        logOut()
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <Link className="btn normal-case text-4xl" to="/">Atomix</Link>
            </div>

            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    <li> <NavLink to="/">Home</NavLink></li>
                    <li>  <NavLink to="/blog">Blog</NavLink> </li>
                    <li><NavLink to="contacts">Contacts</NavLink></li>
                    {/* <li><NavLink to="chef">Chef</NavLink></li> */}
                </ul>

            </div>
            <div className="navbar-end px-3">
            {user?<p className="text-blue-300 bg-gray-900 p-2 rounded">{user.displayName}</p>:""}
                <NavLink className='btn' to="/registration">Register</NavLink>
                {
                    user ? <>
                        <button onClick={handlerLogOut} type="submit">
                            LogOut</button>
                        <div className="w-10 rounded-full ml-3 " >
                            {

                                <div className="tooltip tooltip-bottom tooltip-primary" data-tip={user.displayName}> <img className="w-10 rounded-full" src={user.photoURL} /></div>
                            }
                           
                            
                        </div>
                    </> : <NavLink className='btn' to="/login">Login</NavLink>

                }

            </div>
        </div>
    );
};

export default Header;