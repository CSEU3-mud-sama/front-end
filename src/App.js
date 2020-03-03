import React from "react";

import NavBar from './components/NavBar'
import Game from './components/Game'
import Footer from './components/Footer'

import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <div className='app'>
      <GlobalStyle />
      <NavBar />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
