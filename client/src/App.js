import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page404 from './pages/404/Page404';
import Home from './pages/home/Home';
import SignIn from './pages/signin/Signin';
import SignUp from './pages/signup/SignUp';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Header from './components/common/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import LeaderboardPage from './pages/leaderboard/Leaderboard';

const App = () => (
  <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/leaderboard" component={LeaderboardPage} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </Header>
  </BrowserRouter>
);

export default App;
