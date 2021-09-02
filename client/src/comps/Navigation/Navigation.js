import React from "react";
import { logOut } from "../../firebase/config";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Navigation = () => {
  const { uid, photoURL, displayName } = useUser();

  const handleClose = () => {
    document.querySelector(".mainMenuContainer").classList.toggle("show");
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
                <Link to="/" className="active">
                  Hovedside
                </Link>
                <Link to="/stats">Statistikk</Link>
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
