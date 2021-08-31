import React from "react";
import { logOut } from "../../firebase/config";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

import Navigation from "../Navigation/Navigation";

const User = () => {
  const { uid, photoURL, displayName } = useUser();

  const handleClose = () => {
    document.querySelector(".userPage").classList.toggle("show");
  };

  return (
    <>
      <Navigation />

      {uid ? (
        <>
          <div className="userPage">
            <div className="userContent">
              <button className="closeNav" onClick={handleClose}>
                Lukk
              </button>
              <img src={photoURL} alt={displayName} />
              <p>Hei {displayName}</p>
              <Link to="/stats">Statistikk</Link>
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

export default User;
