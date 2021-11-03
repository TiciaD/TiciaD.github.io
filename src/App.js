import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';



function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
     async function getBlog() {
        try {await axios.get('blog.json')
            .then(function (response) {
                // handle success;
                console.log(response.data)
                // if request successful, create new class with data from API assigned to Weather objects
                let blogPosts = response.data
                setPosts(blogPosts)
            })
            .catch((error) => setError(error.message));
        } catch (error) {
        console.error(error);
        }
    }
        getBlog();
    }, []);
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
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/blog">
                    <Blog posts={posts}/>
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
