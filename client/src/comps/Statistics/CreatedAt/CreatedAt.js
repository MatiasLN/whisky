import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Line } from "react-chartjs-2";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

const CreatedAt = () => {
  const { docs } = useFirestore();
  const [twentyOneCount] = useState([]);
  const [twentyOneAmount] = useState([]);
  const [twentyTwoCount] = useState([]);
  const [twentyTwoAmount] = useState([]);

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
        data: twentyOneAmount,
        backgroundColor: ["rgba(254, 200, 154)"],
        borderColor: ["rgba(254, 200, 154)"],
        borderWidth: 3,
      },
      {
        label: "2022",
        data: twentyTwoAmount,
        backgroundColor: ["rgba(216, 226, 220)"],
        borderColor: ["rgba(216, 226, 220)"],
        borderWidth: 3,
      },
    ],
  };

  useEffect(() => {
    // eslint-disable-next-line
    docs.map((item) => {
      item.createdAt = item.createdAt
        .toDate()
        .toLocaleDateString("nb-NO", { year: "numeric", month: "2-digit" });

      // 2021
      if (item.createdAt.includes("01.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["01.2021"] = (twentyOneCount["01.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("02.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["02.2021"] = (twentyOneCount["02.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("03.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["03.2021"] = (twentyOneCount["03.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("04.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["04.2021"] = (twentyOneCount["04.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("05.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["05.2021"] = (twentyOneCount["05.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("06.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["06.2021"] = (twentyOneCount["06.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("07.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["07.2021"] = (twentyOneCount["07.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("08.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["08.2021"] = (twentyOneCount["08.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("09.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["09.2021"] = (twentyOneCount["09.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("10.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["10.2021"] = (twentyOneCount["10.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("11.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["11.2021"] = (twentyOneCount["11.2021"] || 0) + 0;
      }
      if (item.createdAt.includes("12.2021")) {
        twentyOneCount[item.createdAt] =
          (twentyOneCount[item.createdAt] || 0) + 1;
      } else {
        twentyOneCount["12.2021"] = (twentyOneCount["12.2021"] || 0) + 0;
      }

      // 2022
      if (item.createdAt.includes("01.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["01.2022"] = (twentyTwoCount["01.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("02.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["02.2022"] = (twentyTwoCount["02.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("03.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["03.2022"] = (twentyTwoCount["03.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("04.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["04.2022"] = (twentyTwoCount["04.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("05.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["05.2022"] = (twentyTwoCount["05.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("06.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["06.2022"] = (twentyTwoCount["06.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("07.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["07.2022"] = (twentyTwoCount["07.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("08.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["08.2022"] = (twentyTwoCount["08.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("09.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["09.2022"] = (twentyTwoCount["09.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("10.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["10.2022"] = (twentyTwoCount["10.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("11.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["11.2022"] = (twentyTwoCount["11.2022"] || 0) + 0;
      }
      if (item.createdAt.includes("12.2022")) {
        twentyTwoCount[item.createdAt] =
          (twentyTwoCount[item.createdAt] || 0) + 1;
      } else {
        twentyTwoCount["12.2022"] = (twentyTwoCount["12.2022"] || 0) + 0;
      }
    });
    Object.entries(twentyOneCount).map(([month, value]) =>
      twentyOneAmount.push(value)
    );
    Object.entries(twentyTwoCount).map(([month, value]) =>
      twentyTwoAmount.push(value)
    );
    // eslint-disable-next-line
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
    </>
  );
};

export default CreatedAt;
