import React , {Component} from 'react';

import './App.css';
import Card from './components/Card.js'
import Navbar from './components/Navbar.js'
import Card2 from './components/Card2.js'
import {BrowserRouter, Route} from 'react-router-dom'
import Card3 from './components/Card3.js'

import Form from './components/Form'
 class App  extends  Component  {

  render() {
  return (
    <div>
      <Navbar />
      
    <BrowserRouter>
    <Route path="/Card2"   component={Card2}  />
    <Route exact path="/"  component={Form}  />
    <Route path="/Addnew"   component={Card}  />
    <Route path="/Card3"   component={Card3}  />
    </BrowserRouter>
    </div>
    );
   }
  }

export default App;
