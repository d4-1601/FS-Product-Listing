import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Login } from './components/login';
import { Home } from './components/home';
import { Register } from './components/register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
