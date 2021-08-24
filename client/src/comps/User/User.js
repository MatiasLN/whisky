import React from "react";
import { logOut } from "../../firebase/config";
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
            <button className="closeNav" onClick={handleClose}>
              X
            </button>
            <div className="userContent">
              <img src={photoURL} alt={displayName} />
              <p>Hei {displayName}</p>
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
