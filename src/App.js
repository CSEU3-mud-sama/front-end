import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar'
import Game from './components/Game'
import Footer from './components/Footer'

import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
      <div className='app'>
        <GlobalStyle />
        <Router>
          <NavBar />
          <Game />
          <Footer />
        </Router>
      </div>
  );
}

export default App;
