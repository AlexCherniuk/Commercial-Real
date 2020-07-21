import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Header/Home/Home';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/Header/About Us/About';
import Psales from './components/Header/Past Sales/Psales';
import Tes from './components/Header/Testimonials/Tes';
import Contact from './components/Header/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Top />
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/past_sales' component={Psales} />
        <Route path='/testimonials' component={Tes} />
        <Route path='/about_us' component={About} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='/' component={Main} /> */}

      </div>

    </BrowserRouter>


  );
}
export default App;
