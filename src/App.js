import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Top from './Top/Top';
import Main from './Main/Main';


function App() {
  return (
    <div className='app-wrapper'>
      <Top className='top' />
      <Header className='header' />
     <Main className='main' />
    </div>


  );
}
const name = (params) => {

}
export default App;
