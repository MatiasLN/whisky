import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Line } from "react-chartjs-2";
import { BrowserView, MobileView } from "react-device-detect";

const CreatedAt = () => {
  const { docs } = useFirestore();
  const [yearlyData, setYearlyData] = useState({});

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Dynamically generate chart data based on yearly data
  const generateChartData = () => {
    let datasets = Object.keys(yearlyData).map(year => {
      const colors = {
        "2020": "rgba(252, 213, 206)",
        "2021": "rgba(254, 200, 154)",
        "2022": "rgba(216, 226, 220)",
        "2023": "rgba(116, 164, 198)",
        "2024": "rgba(255, 111, 97)",
        "2025": "rgba(255, 111, 97)",
        "2026": "rgba(0, 0, 0)",
      };
      return {
        label: year,
        data: Object.values(yearlyData[year]),
        backgroundColor: colors[year] || "rgba(0,0,0,0.1)",
        borderColor: colors[year] || "rgba(0,0,0,0.1)",
        borderWidth: 3,
      };
    });

    datasets.unshift({
      label: "2020",
      data: [0, 2, 3, 0, 2, 4, 2, 0, 0, 1, 1], // Manually set data for 2020
      backgroundColor: "rgba(252, 213, 206)",
      borderColor: "rgba(252, 213, 206)",
      borderWidth: 3,
    });

    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets,
    };
  };

  useEffect(() => {
    let updatedYearlyData = {};

    docs.forEach((doc) => {
      const date = doc.createdAt.toDate().toLocaleDateString("nb-NO", {
        year: "numeric",
        month: "2-digit",
      });
      const [month, year] = date.split('.');
      // Skip manual year since it's already defined
      if (year === "2020") return;

      if (!updatedYearlyData[year]) {
        updatedYearlyData[year] = Array(12).fill(0); // Initialize months array with zeros
      }
      const monthIndex = parseInt(month, 10) - 1; // Convert month to zero-based index
      updatedYearlyData[year][monthIndex] += 1; // Increment count
    });

    setYearlyData(updatedYearlyData);
  }, [docs]);

  const data = generateChartData();

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
