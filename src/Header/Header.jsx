import React, { Component } from 'react';
import s from './Header.module.css';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';




const Header = (params) => {
    return (
        <div className={s.container}>
      <Logo />
      <Nav name="Квартиры" />
      <Nav name="Цены" />
      <Nav name="Квартиры" />
      <Nav name="Квартиры" />
      <Nav name="Квартиры" />
        </div>
    );
}







export default Header;