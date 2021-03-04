import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import UserSignup from "./pages/Signup/UserSignup";
import Login from "./pages/Login/Login";
import UserLogin from "./pages/Login/UserLogin";
import Private from "./pages/Private/Private";

// Components
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/user/signup" component={UserSignup} />
          <AnonRoute exact path="/user/login" component={UserLogin} />

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
