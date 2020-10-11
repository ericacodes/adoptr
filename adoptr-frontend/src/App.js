import React, { useState } from 'react';
import './App.css';
import UserRegistration from "./components/userRegistration.js";
import AnimalRegistration from "./components/animalRegistration.js";
import ShelterRegistration from "./components/shelterRegistration.js";
import Nav from "./components/Nav";
import About from "./components/About"
import AnimalProfile from "./components/AnimalProfile"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/profiles' exact component={AnimalProfile} />
          <Route path='/animals' exact component={AnimalRegistration} />
          <Route path='/users' exact component={UserRegistration} />
          <Route path='/shelters' exact component={ShelterRegistration} />
          <Route path='/' exact component={About} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
