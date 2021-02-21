import React from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Blog from './pages/blog/Blog'
import BookOne from './pages/bookOne/BookOne'
import BookTwo from './pages/bookTwo/BookTwo';
import SubBook from './pages/subBook/subBook';

function AppRouter() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/BookOne" component={BookOne} />
        <Route path="/BookTwo" component={BookTwo} />
        <Route path="/Character1" component={SubBook} />
    </Router>
  );
}

export default AppRouter;
