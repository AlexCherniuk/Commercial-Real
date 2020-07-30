import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './components/Top/Top';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import { Route, BrowserRouter } from 'react-router-dom';
import About from './components/About Us/About';
import Psales from './components/Past Sales/Psales';
import Tes from './components/Testimonials/Tes';
import Contact from './components/Contact/Contact';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Top />
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/past_sales' component={Psales} />
        <Route path='/testimonials' render={()=> <Tes dialogsArray={props.appState.dialogsArray} messagesArray={props.appState.messagesArray}/>} />
        <Route path='/about_us' component={About} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='' render={Main} /> */}

      </div>

    </BrowserRouter>


  );
}
export default App;
