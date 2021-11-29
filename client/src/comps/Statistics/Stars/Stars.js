import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import { Radar } from "react-chartjs-2";
import Star from "../../StarRating/Star";

const Stars = () => {
  const { docs } = useFirestore();
  const [starsCount, setStarsCount] = useState([]);
  const [stars, setStarsObj] = useState({});
  const [starKey, setStarKey] = useState("");
  const [maxNumber, setMaxNumber] = useState(null);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Antall stjerner",
        data: starsCount,
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

  useEffect(() => {
    starsCount.push(0);
    let obj = {};
    let amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    docs.map((item) => {
      starsCount[item.star] = (starsCount[item.star] || 0) + 1;
      setStarsCount(starsCount);
    });

    for (var i = 0; i < amount.length; i++) {
      obj[amount[i]] = starsCount[i];
      setStarsObj(obj);
    }
  }, [docs]);

  //   Object.entries(stars).map((starsCount) => {
  //     console.log(starsCount[1]);
  //     console.log(starsCount[1][i]);
  //   });

  useEffect(() => {
    let arr = Object.values(stars);
    let max = Math.max(...arr);
    console.log(max);

    if (Number.isInteger(max)) {
      setMaxNumber(max);
    }

    function val2key(val, array) {
      for (var key in array) {
        if (array[key] == val) {
          return key;
        }
      }
      return false;
    }

    var key = val2key(max, stars);
    if (key) {
      setStarKey(key);
    }
  }, [stars]);

  return (
    <div className="chart">
      <div className="starWrapper">
        {/* {stars && (
        <>
          <h2>Rating av flaskene</h2>
          {starKey ? <h3>{starKey} / 10</h3> : null}
          {maxNumber ? maxNumber : null}
        </>
      )} */}

        {stars &&
          Object.entries(stars).map((starsCount) => {
            return (
              <div className="container" key={starsCount[0]}>
                <div className="header">
                  {starsCount[0]}
                  <span>
                    <Star />
                  </span>
                </div>
                <div>
                  <strong>{starsCount[1]}</strong>x
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Stars;
