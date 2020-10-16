import React from 'react';
import './App.scss';
//import ChartJS from './Components/ChartJS'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
//import LoginPage from './LoginPage/LoginPage';  <LoginPage></LoginPage>
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
//import PieD3 from './Components/PieD3'


function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className = "mainContainer">
        <Switch>
          <Route path = "/about">
            <AboutPage/>
          </Route>

          <Route path = "/login">
            <LoginPage/>
          </Route>

          <Route path = "/">
            <HomePage/>
          </Route>

        </Switch>
        


        <Footer/>


      </div>

    

    </Router>

    
  );
}

export default App;
