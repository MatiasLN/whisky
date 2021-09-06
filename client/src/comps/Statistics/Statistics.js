import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import useFirestore from "../../hooks/useFirestore";
import Countries from "./Countries/Countries";
import Distilleries from "./Distilleries/Distilleries";
import Regions from "./Regions/Regions";

const Statistics = () => {
  const [price] = useState([]);
  const [stars, setStars] = useState([]);
  const [titles, setTitles] = useState([]);
  const [percentages] = useState([]);
  const [averageProcentage, setAverageProcentage] = useState(null);
  const [priceAvg, setPriceAvg] = useState([]);

  const { docs, loading } = useFirestore();

  function calc(num, value, set) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
      total += num[i];
    }
    var value = total / num.length;
    set(value);
  }

  useEffect(() => {
    docs.map((item) => {
      titles.push(item.title);
      stars[item.star] = (stars[item.star] || 0) + 1;

      // add percantages to array and get them ready for avg calculation
      let number = "";
      number = item.polet_percentage;
      let dec = number - Math.floor(number);
      number = number - dec;
      let formattedNumber = ("0" + number).slice(-2);

      if (formattedNumber != "aN") {
        percentages.push(parseInt(formattedNumber));
      }

      // add price to array and get them ready for avg calculation
      let priceNumber = "";
      priceNumber = item.polet_price;
      let priceDec = priceNumber - Math.floor(priceNumber);
      priceNumber = priceNumber - priceDec;
      let priceFormattedNumber = ("0" + priceNumber).slice(-6);
      if (formattedNumber != "aN") {
        price.push(parseInt(priceFormattedNumber));
      }

      calc(percentages, averageProcentage, setAverageProcentage);
      calc(price, priceAvg, setPriceAvg);
      setStars(stars);
      setTitles(titles);
    });
  }, [docs]);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <>
      <div className="numberTasted">
        {titles ? (
          <p>
            Du har smakt <strong>{titles.length}</strong> ulike whiskyer.
          </p>
        ) : null}
      </div>

      <div></div>

      <h1>Dette er fordelt på</h1>
      <Distilleries />

      <Regions />

      <Countries />

      <div className="percentageContainer">
        {averageProcentage ? (
          <p>
            Gjennomsnittet på alkoholenstyrken er <br />
            <strong>{averageProcentage.toFixed(2)}</strong> %
          </p>
        ) : null}
      </div>

      <div className="priceContainer">
        {priceAvg ? (
          <p>
            Gjennomsnittlig pris på flaskene er <br />
            <strong>{priceAvg}0</strong> NOK
          </p>
        ) : null}
      </div>
    </>
  );
};
export default Statistics;
