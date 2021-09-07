import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Line } from "react-chartjs-2";
import { BrowserView, MobileOnlyView, TabletView } from "react-device-detect";

const CreatedAt = () => {
  const { docs } = useFirestore();
  const [CreatedAt] = useState([]);
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
        label: "# of Votes",
        data: amount,
        backgroundColor: ["rgba(254, 200, 154)"],
        borderColor: ["rgba(254, 200, 154)"],
        borderWidth: 3,
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
      item.createdAt = item.createdAt
        .toDate()
        .toLocaleDateString("nb-NO", { year: "numeric", month: "2-digit" });
      if (item.createdAt.includes("2021-")) {
        CreatedAt[item.createdAt] = (CreatedAt[item.createdAt] || 0) + 1;
      }
    });
    count(CreatedAt, setDistCount);

    Object.entries(CreatedAt).map(([distillery, value]) => amount.push(value));
    amount.reverse();
    console.log(CreatedAt);
  }, [docs]);

  return (
    <>
      <BrowserView>
        <div className="chart destilleryChart">
          <Line data={data} options={options} />
        </div>
      </BrowserView>

      <TabletView>
        <div className="chart destilleryChart">
          <Line data={data} options={options} />
        </div>
      </TabletView>

      <MobileOnlyView>
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
      </MobileOnlyView>
    </>
  );
};

export default CreatedAt;
