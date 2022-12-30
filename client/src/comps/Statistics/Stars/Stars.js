import React, { useState, useEffect } from "react";
import useFirestore from "../../../hooks/useFirestore";
import Star from "../../StarRating/Star";

const Stars = () => {
  const { docs } = useFirestore();
  const [starsCount, setStarsCount] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });
  const [ratingNumber, setRatingNumber] = useState("");
  const [maxNumber, setMaxNumber] = useState(null);

  function val2key(val, array) {
    for (let key in array) {
      if (array[key] === val) {
        return key;
      }
    }
    return false;
  }

  useEffect(() => {
    // eslint-disable-next-line
    docs.map((item) => {
      starsCount[item.star] = (starsCount[item.star] || 0) + 1;
      setStarsCount(starsCount);
    });

    let arr = Object.values(starsCount);
    let max = Math.max(...arr);

    if (Number.isInteger(max)) {
      setMaxNumber(max);
    }

    const key = val2key(max, starsCount);
    if (key) {
      setRatingNumber(key);
    }
    // eslint-disable-next-line
  }, [docs]);

  return (
    <>
      <h2 className="starHeader">Rating av flaskene</h2>
      <div className="starWrapper">
        {starsCount &&
          Object.entries(starsCount).map((starsCount, index) => {
            return (
              <>
                <div className="container" key={index}>
                  <div className="header">
                    {starsCount[0]}
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div className="body">
                    <strong>{starsCount[1]}</strong>
                    <span>x</span>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      {starsCount && ratingNumber && maxNumber ? (
        <div className="mostRated">
          <p>
            <strong>{ratingNumber} / 10</strong> er rangert flest ganger med
          </p>
          <span>
            <h2>{maxNumber}</h2>x
          </span>
        </div>
      ) : null}
    </>
  );
};
export default Stars;
