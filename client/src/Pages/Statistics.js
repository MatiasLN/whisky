import React from "react";
import Statistics from "../comps/Statistics/Statistics";

const StatisticsPage = () => {
  document.querySelector(".App").classList.add("fullWidthApp");

  return (
    <section className="statisticsContainer">
      <Statistics />
    </section>
  );
};
export default StatisticsPage;
