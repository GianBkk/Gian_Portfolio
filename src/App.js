import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './shared/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {
  return (
    <Router>
      <div className="App">
        
          <NavBar/>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/about'><About /></Route>
            <Route exact path='/projects'>{/* Projects Component */}</Route>
            <Route exact path='/contact'>{/* Contact Component */}</Route>
          </Switch>
          {/* Footer */}
        
      </div>
    </Router>
  );
}

export default App;
