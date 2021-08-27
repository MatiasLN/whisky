import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WhiskyProvider } from "../context/WhiskyContext";
import useUser from "../hooks/useUser";

import Home from "../pages/Home";
import Whisky from "../pages/Whisky";
import Error from "../pages/Error";

import Logo from "./Logo/Logo";
import SignIn from "./User/SignIn";
import User from "./User/User";

function MainContent() {
  const { uid } = useUser();

  if (uid) {
    return (
      <div className="MainContent">
        <BrowserRouter>
          <Switch>
            <WhiskyProvider>
              <Logo />
              <User />
              <Route path="/" component={Home} exact />
              <Route path="/whisky" component={Whisky} exact />
            </WhiskyProvider>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="notLoggedIn">
      <div className="container">
        <h1 className="logoTitle">Pet Sematary</h1>
        <SignIn />
      </div>
    </div>
  );
}
export default MainContent;
