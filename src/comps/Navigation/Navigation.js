import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navigation = () => {
  let user = useContext(UserContext);
  user = user.user;

  const handleNavigation = () => {
    document.querySelector(".userPage").classList.toggle("show");
  };

  return (
    <nav>
      <img
        src={user.photoURL}
        alt={user.displayName}
        onClick={handleNavigation}
      />
    </nav>
  );
};

export default Navigation;
