import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { logOut } from "../../firebase/config";
import useFirestore from "../../hooks/useFirestore";

import Navigation from "../Navigation/Navigation";

const User = () => {
  const [number, setNumber] = useState(0);
  let user = useContext(UserContext);
  const uid = user.user.uid;
  user = user.user;
  const { titles } = useFirestore(uid);

  useEffect(() => {
    if (titles.length) {
      setNumber(titles.length);
    }
  }, [titles]);

  const handleClose = () => {
    document.querySelector(".userPage").classList.toggle("show");
  };

  return (
    <>
      <Navigation />

      {user ? (
        <>
          <div className="userPage">
            <button className="closeNav" onClick={handleClose}>
              X
            </button>
            <div className="userContent">
              <img src={user.photoURL} alt={user.displayName} />
              <p>Hei {user.displayName}</p>
              <p>Du har smakt {number} whiskyer</p>
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
