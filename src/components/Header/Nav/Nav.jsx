import React from 'react';
import s from './Nav.module.css';
import Home from './Home/Home';
import Tes from './Testimonials/Tes';
import About from './About Us/About';
import Contact from './Contact/Contact';
import Psales from './Past Sales/Psales';

const Nav = (props) => {
    return (
       <div className={s.li}>
           <Home />
           <Psales />
           <Tes />
           <About />
           <Contact />
       </div>
    );
}

export default Nav;