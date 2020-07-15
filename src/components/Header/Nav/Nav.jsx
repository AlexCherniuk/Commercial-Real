import React from 'react';
import s from './Nav.module.css';
import Home from './Home/Home';
import Tes from './Testimonials/Tes';
import About from './About Us/About';
import Contact from './Contact/Contact';
import Psales from './Past Sales/Psales';

const Nav = (props) => {
    return (
        <nav className={s.li}>
            <div>
                <a href='/home'>Home</a>
            </div>
            <div>
                <a href='/testimonials'>Testimonials</a>
            </div>
            <div>
                <a href='/past_sales'>Past Sales</a>
            </div>
            <div>
                <a href='/about_us'>About Us</a>
            </div>
            <div>
                <a href='/contact'>Contact</a>
            </div>

        </nav>
    );
}

export default Nav;