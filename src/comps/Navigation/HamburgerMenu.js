import React from "react";
import useUser from "../../hooks/useUser";
import Navigation from "./Navigation";

const HamburgerMenu = () => {
  const { photoURL, displayName } = useUser();

  const handleNavigation = () => {
    document.querySelector(".mainMenuContainer").classList.toggle("show");
  };

  return (
    <>
      <nav className="hamburgerMenu">
        <img src={photoURL} alt={displayName} onClick={handleNavigation} />
      </nav>
      <Navigation />
    </>
  );
};

export default HamburgerMenu;
