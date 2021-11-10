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
import ScrollToTop from './components/ScrollToTop';

// Pacifico font from Adobe Fonts

function App() {
    
    // useEffect(() => {
    //     axios.get('blog.json')
    //     .then(function(response) {
    //         // handle success;
    //         if (response) return response.json();
    //         console.log(response)
    //         throw new Error('something went wrong while requesting posts');
    //     })
    //     // if request successful, set posts state to equal data obtained from json
    //     .then((posts) => setPosts(posts))
    //     // if error occurs, set error state to equal error message
    //     .catch((error) => setError(error.message));
    // }, []);

  return (
    <Router>
        <MyNavbar />
            <ScrollToTop/>
                <Switch>
                    <Route exact path="/blog">
                        <Blog/>
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
