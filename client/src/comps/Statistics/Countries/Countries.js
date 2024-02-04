import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Pie } from "react-chartjs-2";
import { BrowserView, MobileView } from "react-device-detect";

const Countries = () => {
  const { docs } = useFirestore();
  const [, setCountryCounts] = useState({});
  const [countryCount, setCountryCount] = useState(0);
  const [names, setNames] = useState([]);
  const [amounts, setAmounts] = useState([]);

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        color: "#36A2EB",
      },
    },
  };

  const mobileOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
        },
      },
    },
  };

  useEffect(() => {
    let newCountryCounts = {};
    docs.forEach((item) => {
      if (item.polet_country) {
        newCountryCounts[item.polet_country] = (newCountryCounts[item.polet_country] || 0) + 1;
      }
    });

    setCountryCounts(newCountryCounts);
    setNames(Object.keys(newCountryCounts));
    setAmounts(Object.values(newCountryCounts));
    setCountryCount(Object.keys(newCountryCounts).length);
  }, [docs]);

  const data = {
    labels: names,
    datasets: [
      {
        label: "Land",
        data: amounts,
        backgroundColor: [
          "rgba(254, 200, 154)",
          "rgba(216, 226, 220)",
          "rgba(254, 197, 187)",
          "rgba(252, 213, 206)",
          "rgba(250, 225, 221)",
          "rgba(248, 237, 235)",
          "rgba(232, 232, 228)",
          "rgba(216, 226, 220)",
          "rgba(236, 228, 219)",
        ],
        borderColor: [
          "rgba(254, 200, 154)",
          "rgba(232, 232, 228)",
          "rgba(254, 197, 187)",
          "rgba(252, 213, 206)",
          "rgba(250, 225, 221)",
          "rgba(248, 237, 235)",
          "rgba(232, 232, 228)",
          "rgba(216, 226, 220)",
          "rgba(236, 228, 219)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <BrowserView>
        <div className="chart countryChart">
          <h2>Fra <strong>{countryCount}</strong> land</h2>
          <Pie data={data} options={options} />
        </div>
      </BrowserView>

      <MobileView>
        <div className="chart countryChart">
          <h2>Fra <strong>{countryCount}</strong> land</h2>
          <Pie data={data} options={mobileOptions} />
        </div>
      </MobileView>
    </>
  );
};

export default Countries;