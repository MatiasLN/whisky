import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { WhiskyProvider } from "../context/WhiskyContext";

import Home from "../Pages/Home";
import Whisky from "../Pages/Whisky";
import Error from "../Pages/Error";

import Logo from "./Logo/Logo";
import Title from "./Title/Title";
import SignIn from "./User/SignIn";
import User from "./User/User";

function MainContent() {
  const user = useContext(UserContext);
  const uid = user.user.uid;

  if (uid) {
    return (
      <div className="MainContent">
        <BrowserRouter>
          <Switch>
            <WhiskyProvider>
              <Logo />
              <User />
              <Title />
              <Route path="/" component={Home} exact />
              <Route path="/whisky" component={Home} exact />
              <Route path="/whiskyType" component={Whisky} exact />
            </WhiskyProvider>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Logo />
            <Title />
            <SignIn />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default MainContent;
