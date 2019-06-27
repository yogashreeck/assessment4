import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import RegisterComp from './components/RegisterComp';
import AddViewComp from './components/AddViewComp'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginComp}></Route>
          <Route exact path='/register' component={RegisterComp}></Route>
          <Route exact path='/home' component={AddViewComp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
