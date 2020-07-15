import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Header/Nav/Home/Home';

function App() {
  return (
    <div className='app-wrapper'>
      <Top />
      <Header />
      {/* <Home /> */}
      <Main />
    </div>


  );
}
export default App;
