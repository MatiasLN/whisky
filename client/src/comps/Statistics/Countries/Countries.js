import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Pie } from "react-chartjs-2";
import {
  BrowserView,
  MobileOnlyView,
  TabletView,
  MobileView,
} from "react-device-detect";

const Countries = () => {
  const { docs } = useFirestore();
  const [countries] = useState([]);
  const [countryCount, setCountryCount] = useState(null);
  const [name] = useState([]);
  const [amount] = useState([]);

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const mobile = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
        },
      },
    },
  };

  const data = {
    labels: name,
    datasets: [
      {
        label: "Antall flasker",
        data: amount,
        backgroundColor: [
          "rgba(254, 200, 154)",
          "rgba(255, 215, 186)",
          "rgba(255, 229, 217)",
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
          "rgba(255, 215, 186)",
          "rgba(255, 229, 217)",
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

  function count(value, set) {
    var total = 0;
    Object.entries(value).map(([]) => (total += 1));
    set(total);
  }

  useEffect(() => {
    docs.map((item) => {
      countries[item.polet_country] = (countries[item.polet_country] || 0) + 1;
    });
    count(countries, setCountryCount);

    Object.entries(countries).map(
      ([country, value]) => name.push(country) && amount.push(value)
    );
  }, [docs]);

  return (
    <>
      <BrowserView>
        <div className="chart countryChart">
          <h2>
            Fra<strong>{countryCount}</strong>land
          </h2>
          <Pie data={data} options={options} />
        </div>
      </BrowserView>

      <MobileView>
        <div className="chart countryChart">
          <h2>
            Fra<strong>{countryCount}</strong>land
          </h2>
          <Pie data={data} options={mobile} />
        </div>
      </MobileView>
    </>
  );
};

export default Countries;
