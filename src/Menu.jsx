import React from 'react';
import { NavLink } from "react-router-dom";
import css from './Menu.css';

function Menu() {
    return (
        <>
            <ul className='menu'>
                <NavLink to='/home' className='li'>Home</NavLink>
                <NavLink to='/about' className='li'>About</NavLink>
                <NavLink to='/search' className='li'>Search</NavLink>
                <NavLink to='/contact' className='li'>Contact</NavLink>
                <NavLink to='/subscription' className='li'>Subscription</NavLink>
            </ul>
        </>
    )
}

export default Menu
