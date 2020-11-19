import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { logOut, projectFirestore } from "../../firebase/config";

const User = () => {
  const [number, setNumber] = useState(0);
  let user = useContext(UserContext);
  const uid = user.user.uid;
  user = user.user;

  const navigation = () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".userPage").classList.toggle("show");
    document.querySelector("nav").classList.toggle("active");
  };

  projectFirestore
    .collection(uid)
    .get()
    .then(function (querySnapshot) {
      setNumber(querySnapshot.size);
    });

  return (
    <>
      <nav>
        <button
          className="hamburger hamburger--slider"
          type="button"
          onClick={navigation}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>

      {user ? (
        <>
          <div className="userPage">
            <div className="userContent">
              <img src={user.photoURL} alt={user.photoURL} />
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
