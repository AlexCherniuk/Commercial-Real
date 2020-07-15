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
                <a>Home</a>
            </div>
            <div>
                <a>Testimonials</a>
            </div>
            <div>
                <a>Past Sales</a>
            </div>
            <div>
                <a>About Us</a>
            </div>
            <div>
                <a>Contact</a>
            </div>

        </nav>
    );
}

export default Nav;