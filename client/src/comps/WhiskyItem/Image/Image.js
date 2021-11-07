import React from "react";
import placeholderImg from "../../../images/placeholder.jpeg";

const Image = ({ data, edit }) => {
  const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

  const handleModal = () => {
    document.querySelector(".backdrop").style.display = "block";
  };

  if (LOCAL_DOMAINS.includes(window.location.hostname)) {
    return (
      <>
        {edit ? (
          <img src={placeholderImg} style={{ opacity: "0.1" }} alt={"local"} />
        ) : (
          <img src={placeholderImg} alt={"local"} onClick={handleModal} />
        )}
      </>
    );
  } else {
    return (
      <>
        {edit ? (
          <img src={data} style={{ opacity: "0.1" }} alt={data} />
        ) : (
          <img src={data} alt={data} onClick={handleModal} />
        )}
      </>
    );
  }
};

export default Image;
