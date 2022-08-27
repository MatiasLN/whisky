import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WhiskyProvider } from "../../context/WhiskyContext";
import useUser from "../../hooks/useUser";

import Home from "../../Pages/Home";
import Whisky from "../../Pages/Whisky";
import Error from "../../Pages/Error";
import Statistics from "../../Pages/Statistics";

import Logo from "../Logo/Logo";
import SignIn from "../SignIn/SignIn";
import HamburgerMenu from "../Navigation/HamburgerMenu";

function MainContent() {
  const { uid } = useUser();

  if (uid) {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <WhiskyProvider>
              <header>
                <Logo />
                <HamburgerMenu />
              </header>
              <Route path="/" component={Home} exact />
              <Route path="/whisky" component={Whisky} exact />
              <Route path="/stats" component={Statistics} exact />
            </WhiskyProvider>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </>
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
