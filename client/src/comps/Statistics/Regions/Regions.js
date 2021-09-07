import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Bar } from "react-chartjs-2";
import { BrowserView, MobileOnlyView, TabletView } from "react-device-detect";

const Regions = () => {
  const { docs } = useFirestore();
  const [Regions] = useState([]);
  const [regCount, setregCount] = useState(null);
  const [name] = useState([]);
  const [amount] = useState([]);

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

  const data = {
    labels: name,
    datasets: [
      {
        label: "Antall flasker",
        data: amount,
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

  function count(value, set) {
    var total = 0;
    Object.entries(value).map(([]) => (total += 1));
    set(total);
  }

  useEffect(() => {
    docs.map((item) => {
      Regions[item.polet_region] = (Regions[item.polet_region] || 0) + 1;
    });
    count(Regions, setregCount);

    Object.entries(Regions).map(
      ([region, value]) => name.push(region) && amount.push(value)
    );
  }, [docs]);

  return (
    <>
      <BrowserView>
        <div className="chart regionChart">
          <h2>
            Fra<strong>{regCount}</strong>regioner
          </h2>
          <Bar data={data} options={options} />
        </div>
      </BrowserView>

      <TabletView>
        <div className="chart regionChart">
          <h2>
            Fra<strong>{regCount}</strong>regioner
          </h2>
          <Bar data={data} options={options} />
        </div>
      </TabletView>

      <MobileOnlyView>
        <div className="districtsContainer">
          <h2>{regCount} regioner</h2>
          {Regions ? (
            <ul>
              {Object.entries(Regions).map(([region, value]) => (
                <li key={region}>
                  <p>{region}</p> <span>{value}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </MobileOnlyView>
    </>
  );
};

export default Regions;
