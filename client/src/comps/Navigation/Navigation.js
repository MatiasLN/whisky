import React, { useState } from "react";
import { logOut } from "../../firebase/config";
import { NavLink, Route } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Navigation = () => {
  const { uid, photoURL, displayName } = useUser();
  const [isActive, setActive] = useState(false);

  const handleClose = () => {
    document.querySelector(".mainMenuContainer").classList.toggle("show");
  };

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      {uid ? (
        <>
          <div className="mainMenuContainer">
            <div className="mainMenuContent">
              <button className="closeNav" onClick={handleClose}>
                Lukk
              </button>
              <img src={photoURL} alt={displayName} />
              <p>Hei {displayName}</p>
              <nav className="mainMenu">
                <NavLink to="/" activeClassName="active" exact={true}>
                  Hovedside
                </NavLink>
                <NavLink to="/stats" activeClassName="active" exact={true}>
                  Statistikk
                </NavLink>
              </nav>
              <button
                className="logOutBtn"
                onClick={() => {
                  logOut();
                }}
              >
                Logg ut
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Navigation;
