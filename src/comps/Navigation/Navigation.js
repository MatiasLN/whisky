import React from "react";
import useUser from "../../hooks/useUser";

const Navigation = () => {
  const { photoURL, displayName } = useUser();

  const handleNavigation = () => {
    document.querySelector(".userPage").classList.toggle("show");
  };

  return (
    <nav>
      <img src={photoURL} alt={displayName} onClick={handleNavigation} />
    </nav>
  );
};

export default Navigation;
