import React , {Component} from 'react';

import './App.css';
import Card from './components/Card.js'
import Navbar from './components/Navbar.js'

import {BrowserRouter, Route} from 'react-router-dom'
import Card3 from './components/Card3.js'

import Form from './components/Form'
 class App  extends  Component  {

  render() {
  return (
    <div>
      <Navbar />
      
    <BrowserRouter>
    
    <Route exact path="/"  component={Form}  />
    <Route path="/Addnew"   component={Card}  />
    <Route path="/Card3"   component={Card3}  />
    </BrowserRouter>
    </div>
    );
   }
  }

export default App;
