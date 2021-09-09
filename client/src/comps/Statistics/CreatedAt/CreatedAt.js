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
      if (item.createdAt.includes("01.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["01.2021"] = (CreatedAt["01.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("02.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["02.2021"] = (CreatedAt["02.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("03.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["03.2021"] = (CreatedAt["03.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("04.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["04.2021"] = (CreatedAt["04.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("05.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["05.2021"] = (CreatedAt["05.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("06.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["06.2021"] = (CreatedAt["06.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("07.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["07.2021"] = (CreatedAt["07.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("08.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["08.2021"] = (CreatedAt["08.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("09.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["09.2021"] = (CreatedAt["09.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("10.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["10.2021"] = (CreatedAt["10.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("11.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["11.2021"] = (CreatedAt["11.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("12.2021")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      } else {
        CreatedAt["12.2021"] = (CreatedAt["12.2021"] || 0) + 0;
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
