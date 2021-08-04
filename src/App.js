import React from 'react';
import { createGlobalStyle } from "styled-components"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Main from './pages/Main';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Left_nav from './Components/Left_nav';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body{
  background-color: #2d2d30;
  color:white;
}

a{
  text-decoration:none;
  color: white;
}
`;


const App = ()=> {
  return (
    <>
    <GlobalStyle/>
      
      <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Left_nav/>
      <Route exact path="/" exact>
        <Main/>
      </Route>
      <Route path="/contact" exact>
        <Contact/>
      </Route>
    </Router>
    
    </>
  );
}

export default App;
