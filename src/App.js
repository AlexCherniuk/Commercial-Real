import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Header/Nav/Home/Home';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Top />
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/about_us' component={Main} />
        {/* <Main /> */}
      </div>

    </BrowserRouter>


  );
}
export default App;
