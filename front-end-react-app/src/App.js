import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/components/home'
import DashBoard from '../src/components/about'
import Navbar from '../src/components/navbar'
import TaskManager from '../src/components/taskmanager'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/dash' component={DashBoard} />
          <Route path='/task' component={TaskManager} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
