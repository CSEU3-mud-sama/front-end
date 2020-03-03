import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import About from './pages/About'
import Play from './pages/Game'
import Home from './pages/Home'

import GlobalStyle from './styles/GlobalStyle'

const StyledApp = styled.div`
  width: 1024px;

  margin: 0 auto;
`

function App() {

  const isLoggedIn = false;

  return (
      <StyledApp>
        <GlobalStyle />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              {isLoggedIn ? <Play /> : <Home />}
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </StyledApp>
  );
}

export default App;
