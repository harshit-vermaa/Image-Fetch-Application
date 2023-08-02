import React from 'react';
import { NavLink } from "react-router-dom";
import css from './Menu.css';

function Menu() {
    return (
        <>
            <div className='menu'>
                <p to='/search' className='li'>Image Fetching App by <NavLink to='https://github.com/harshit-vermaa' style={{color:'lightblue', textDecoration:'none'}} >Harshit Verma</NavLink></p>
            </div>
        </>
    )
}

export default Menu
