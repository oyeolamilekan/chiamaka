import './App.css';

import { Route, Switch } from "react-router-dom";

import AboutBook from './pages/aboutBook';
import Blog from "./pages/blog";
import Index from './pages';
import Profile from './pages/profile';
import React from 'react';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/profile" component={Profile} />
      <Route path="/about_book" component={AboutBook} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default App;
