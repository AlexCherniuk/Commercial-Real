import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
        <nav className={s.li}>
            <div>
                <NavLink to='/home' activeClassName={s.active}>Home</NavLink>
            </div>
            <div>
                <NavLink to='/testimonials' activeClassName={s.active}>Testimonials</NavLink>
            </div>
            <div>
                <NavLink to='/past_sales' activeClassName={s.active}>Past Sales</NavLink>
            </div>
            <div>
                <NavLink to='/about_us' activeClassName={s.active}>About Us</NavLink>
            </div>
            <div>
                <NavLink to='/contact' activeClassName={s.active}>Contact</NavLink>
            </div>

        </nav>
    );
}

export default Nav;