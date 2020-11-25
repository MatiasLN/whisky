import React from "react";
import Image from "../ImageGrid/Image/Image";

const Modal = ({ url }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      document.querySelector(".backdrop").style.display = "none";
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <Image data={url} />
    </div>
  );
};
export default Modal;
