import React, { Component } from 'react';
import s from './Header.module.css';
import Logo from './../Logo/Logo';
import Nav from './../Nav/Nav';

const Header = (params) => {
  return (
    <div className={s.header}>
    <Logo />
    <Nav />
    </div>
  );
}







export default Header;