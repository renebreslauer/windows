import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar'
import './App.scss'

function App () {

  return (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
  )
}

export default App