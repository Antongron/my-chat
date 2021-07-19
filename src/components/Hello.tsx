import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import RegisterForm from './RegisterForm';
import './style.sass';

export const Hello: React.FC = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/registration" component={RegisterForm} />
    </div>
  </Router>
);
