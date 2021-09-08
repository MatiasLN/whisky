import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Line } from "react-chartjs-2";
import {
  BrowserView,
  MobileOnlyView,
  TabletView,
  MobileView,
} from "react-device-detect";

const CreatedAt = () => {
  const { docs } = useFirestore();
  const [CreatedAt] = useState([]);
  const [amount] = useState([]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: [
      "Januar",
      "Februar",
      "Mars",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        label: "2020",
        data: [0, 2, 3, 0, 2, 4, 2, 0, 0, 1, 1],
        backgroundColor: ["rgba(252, 213, 206)"],
        borderColor: ["rgba(252, 213, 206)"],
        borderWidth: 3,
      },
      {
        label: "2021",
        data: amount,
        backgroundColor: ["rgba(254, 200, 154)"],
        borderColor: ["rgba(254, 200, 154)"],
        borderWidth: 3,
      },
    ],
  };

  useEffect(() => {
    docs.map((item) => {
      item.createdAt = item.createdAt
        .toDate()
        .toLocaleDateString("nb-NO", { year: "numeric", month: "2-digit" });
      if (item.createdAt.includes("2021-01")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-01"] = (CreatedAt["2021-01"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-02")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-02"] = (CreatedAt["2021-02"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-03")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-03"] = (CreatedAt["2021-03"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-04")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-04"] = (CreatedAt["2021-04"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-02")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-05"] = (CreatedAt["2021-05"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-05")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-05"] = (CreatedAt["2021-05"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-06")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-06"] = (CreatedAt["2021-06"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-07")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-07"] = (CreatedAt["2021-07"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-08")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-08"] = (CreatedAt["2021-08"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-09")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-09"] = (CreatedAt["2021-09"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-10")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-10"] = (CreatedAt["2021-10"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-11")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-11"] = (CreatedAt["2021-11"] || 0) + 0;
      }
      if (item.createdAt.includes("2021-12")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["2021-12"] = (CreatedAt["2021-12"] || 0) + 0;
      }
    });
    Object.entries(CreatedAt).map(([month, value]) => amount.push(value));
  }, [docs]);

  return (
    <>
      <BrowserView>
        <div className="chart createdAtChart">
          <h2>Når flaskene ble lagt til</h2>
          <Line data={data} options={options} />
        </div>
      </BrowserView>

      <MobileView>
        <div className="chart createdAtChart">
          <h2>Når flaskene ble lagt til</h2>
          <Line data={data} options={options} />
        </div>
      </MobileView>

      {/* <MobileOnlyView>
        <div className="countriesContainer">
          {CreatedAt ? (
            <ul>
              {Object.entries(CreatedAt).map(([distillery, value]) => (
                <li key={distillery}>
                  <p>{distillery}</p> <span>{value}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </MobileOnlyView> */}
    </>
  );
};

export default CreatedAt;
