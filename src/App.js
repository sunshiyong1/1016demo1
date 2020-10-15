import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './styles/app.css'
import Home from './pages/Home'
import About from './pages/About'
import List from './pages/List'
import { HashRouter as Router,NavLink } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';




function App() {
  return (
    <div className="App">
      <Router>
        <ul className="ulList">
          <li> <NavLink exact to="/">shouye</NavLink> </li>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/list">list</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" component={List} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
