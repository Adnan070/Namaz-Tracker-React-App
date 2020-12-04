import React from "react";
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register" component={Register} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}
