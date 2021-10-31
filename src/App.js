import './App.css';
import React, { Fragment } from 'react';

// importing components

import {Navbar} from './components/Navbar'
import { Header } from './components/Header';
import { Show } from './components/Show';
import { Social } from './components/Social';
import { Footer } from './components/Footer';

function App() {
  return (
    <Fragment>
      <div id="showcase">
    <Navbar/>
    <Header/>
    </div>
    <Show/>
    <Social/>
    <Footer/>
    </Fragment>
  );
}

export default App;
