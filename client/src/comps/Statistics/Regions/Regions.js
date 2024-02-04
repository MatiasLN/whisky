import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Bar } from "react-chartjs-2";
import { BrowserView, MobileView } from "react-device-detect";

const Regions = () => {
  const { docs } = useFirestore();
  const [, setRegionCounts] = useState({});
  const [regCount, setRegCount] = useState(0);
  const [names, setNames] = useState([]);
  const [amounts, setAmounts] = useState([]);

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const mobileOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: names,
    datasets: [
      {
        label: "Antall flasker",
        data: amounts,
        backgroundColor: [
          "rgba(254, 197, 187)",
          "rgba(252, 213, 206)",
          "rgba(250, 225, 221)",
          "rgba(248, 237, 235)",
          "rgba(232, 232, 228)",
          "rgba(216, 226, 220)",
          "rgba(236, 228, 219)",
          "rgba(255, 229, 217)",
          "rgba(255, 215, 186)",
          "rgba(254, 200, 154)",
        ],
        borderColor: [
          "rgba(254, 197, 187)",
          "rgba(252, 213, 206)",
          "rgba(250, 225, 221)",
          "rgba(248, 237, 235)",
          "rgba(232, 232, 228)",
          "rgba(216, 226, 220)",
          "rgba(236, 228, 219)",
          "rgba(255, 229, 217)",
          "rgba(255, 215, 186)",
          "rgba(254, 200, 154)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const newRegionCounts = {};
    docs.forEach((item) => {
      if (item.polet_region) { // Only include non-empty regions
        newRegionCounts[item.polet_region] = (newRegionCounts[item.polet_region] || 0) + 1;
      }
    });
    setRegionCounts(newRegionCounts);

    setNames(Object.keys(newRegionCounts));
    setAmounts(Object.values(newRegionCounts));
    setRegCount(Object.keys(newRegionCounts).length);
  }, [docs]);

  return (
    <>
      <BrowserView>
        <div className="chart regionChart">
          <h2>
            Fra <strong>{regCount}</strong> regioner
          </h2>
          <Bar data={data} options={options} />
        </div>
      </BrowserView>

      <MobileView>
        <div className="chart regionChart">
          <h2>
            Fra <strong>{regCount}</strong> regioner
          </h2>
          <Bar data={data} options={mobileOptions} />
        </div>
      </MobileView>
    </>
  );
};

export default Regions;
