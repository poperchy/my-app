import React from 'react';
import '../css/Nav.css';
import {NavLink} from "react-router-dom";


const Nav = (props) => {

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink className='nav__link' to="/profile">Profile</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' to="/message">Messages</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' to="/news">News</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' to="/music">Music</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' to="/settings">Settings</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className='nav__link' to='/friends'>Friends</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;