import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
        <MyNavbar />
            <Switch>
                <Route exact path="/blog">
                    <Blog />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
