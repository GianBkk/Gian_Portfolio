import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './shared/NavBar'
import Home from './pages/home/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/'><Home/></Route>
          <Route path='/About'>{/* About Component */}</Route>
          <Route path='/Projects'>{/* Projects Component */}</Route>
          <Route path='/Contact'>{/* Contact Component */}</Route>
        </Switch>
         {/* Footer */}
      </Router>
    </div>
  );
}

export default App;
