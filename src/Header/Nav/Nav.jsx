import React from 'react';
import s from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav >
                    <li className={s.a}>
                        <a>{props.name}</a>
                    </li>
            </nav>
    );
}

export default Nav;