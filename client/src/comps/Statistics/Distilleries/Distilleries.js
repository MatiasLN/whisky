import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Doughnut } from "react-chartjs-2";
import {
  BrowserView,
  MobileOnlyView,
  TabletView,
} from "react-device-detect";

const Distilleries = () => {
  const { docs } = useFirestore();
  const [distilleries] = useState([]);
  const [distCount, setDistCount] = useState(null);
  const [name] = useState([]);
  const [amount] = useState([]);

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const tablet = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          align: "start",
          padding: 15,
        },
      },
    },
  };

  const mobile = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: name,
    datasets: [
      {
        label: "# of Votes",
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
    // eslint-disable-next-line
    Object.entries(value).map(([]) => (total += 1));
    set(total);
  }

  useEffect(() => {
    // eslint-disable-next-line
    docs.map((item) => {
      distilleries[item.polet_destilery] =
        (distilleries[item.polet_destilery] || 0) + 1;
    });
    count(distilleries, setDistCount);

    Object.entries(distilleries).map(
      ([distillery, value]) => name.push(distillery) && amount.push(value)
    );
    // eslint-disable-next-line
  }, [docs]);

  return (
    <>
      <BrowserView>
        <div className="chart destilleryChart">
          <h2>
            Fra<strong>{distCount}</strong>destillerier
          </h2>
          <Doughnut data={data} options={options} />
        </div>
      </BrowserView>

      <TabletView>
        <div className="chart destilleryChart">
          <h2>
            Fra<strong>{distCount}</strong>destillerier
          </h2>
          <Doughnut data={data} options={tablet} />
        </div>
      </TabletView>

      <MobileOnlyView>
        <div className="chart destilleryChart">
          <h2>
            Fra<strong>{distCount}</strong>destillerier
          </h2>
          <Doughnut data={data} options={mobile} />
        </div>
        <div className="countriesContainer">
          {distilleries ? (
            <ul>
              {Object.entries(distilleries).map(([distillery, value]) => (
                <li key={distillery}>
                  <p>{distillery}</p> <span>{value}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </MobileOnlyView>
    </>
  );
};

export default Distilleries;
