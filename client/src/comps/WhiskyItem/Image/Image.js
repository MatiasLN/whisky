import React, { useContext } from "react";
import { WhiskyContext } from "../../../context/WhiskyContext";
import placeholderImg from "../../../images/placeholder.jpeg";

const Image = ({ data, edit }) => {
  const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];
  const { state } = useContext(WhiskyContext);

  const handleModal = () => {
    document.querySelector(".backdrop").style.display = "block";
  };

  if (LOCAL_DOMAINS.includes(window.location.hostname)) {
    return (
      <>
        {state.edit.imgUrl ? (
          <img
            src={state.edit.imgUrl}
            style={{ opacity: "0.1" }}
            alt={"blob url"}
          />
        ) : null}
        {edit ? (
          <img
            src={state.edit.imgUrl ? state.edit.imgUrl : placeholderImg}
            style={{ opacity: "0.1" }}
            alt={"local edit"}
          />
        ) : (
          <img src={placeholderImg} alt={"local"} onClick={handleModal} />
        )}
      </>
    );
  } else {
    return (
      <>
        {state.edit.imgUrl ? (
          <img src={state.edit.imgUrl} style={{ opacity: "0.1" }} alt={data} />
        ) : null}
        {edit ? (
          <img
            src={state.edit.imgUrl ? state.edit.imgUrl : data}
            style={{ opacity: "0.1" }}
            alt={data}
          />
        ) : (
          <img src={data} alt={data} onClick={handleModal} />
        )}
      </>
    );
  }
};

export default Image;
