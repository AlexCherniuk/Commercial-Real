import React from 'react';
import s from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = (params) => {
    return (

        <div className={s.logo}>
            <NavLink to='/'>
                <img src={require('./../../../imgs/BanyanCo.png')} alt="logo"></img>
            </NavLink>

        </div>


    );
}



export default Logo;