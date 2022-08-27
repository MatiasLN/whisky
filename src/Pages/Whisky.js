import React from "react";
import WhiskyItem from "../comps/WhiskyItem/WhiskyItem";

const WhiskyPage = () => {
  document.querySelector(".App").classList.remove("fullWidthApp");
  return (
    <section className="whiskyContainer">
      <WhiskyItem />
    </section>
  );
};
export default WhiskyPage;
