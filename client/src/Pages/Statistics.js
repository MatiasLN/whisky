import React, { useState, useContext, useEffect } from "react";
import { db } from "../firebase/config";

const StatisticsPage = () => {
  const [uid] = useState(localStorage.getItem("uid"));
  const [regions, setRegions] = useState([]);
  const [price, setPrice] = useState([]);
  const [priceAvg, setPriceAvg] = useState([]);
  const [percentages, setPercentages] = useState([]);
  const [averageProcentage, setAverageProcentage] = useState(null);
  const [countries, setCountries] = useState([]);
  const [destilery, setDestilery] = useState([]);
  const [stars, setStars] = useState([]);
  const [titles, setTitles] = useState([]);

  // calculate average of sum
  function calc(num, value, set) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
      total += num[i];
    }
    var value = total / num.length;
    set(value);
  }

  useEffect(() => {
    const getData = async () => {
      //const titles = [];
      const response = db.collection(uid);

      const data = await response.get();
      data.docs.forEach((item) => {
        titles.push(item.data().title);
        regions[item.data().polet_region] =
          (regions[item.data().polet_region] || 0) + 1;
        destilery[item.data().polet_destilery] =
          (destilery[item.data().polet_destilery] || 0) + 1;
        countries[item.data().polet_country] =
          (countries[item.data().polet_country] || 0) + 1;
        stars[item.data().star] = (stars[item.data().star] || 0) + 1;

        // add percantages to array and get them ready for avg calculation
        var number = "";
        number = item.data().polet_percentage;
        var dec = number - Math.floor(number);
        number = number - dec;
        var formattedNumber = ("0" + number).slice(-2);
        if (formattedNumber != "aN") {
          percentages.push(parseInt(formattedNumber));
        }

        // add price to array and get them ready for avg calculation
        var priceNumber = "";
        priceNumber = item.data().polet_price;
        var priceDec = priceNumber - Math.floor(priceNumber);
        priceNumber = priceNumber - priceDec;
        var priceFormattedNumber = ("0" + priceNumber).slice(-6);
        if (formattedNumber != "aN") {
          price.push(parseInt(priceFormattedNumber));
        }
      });

      calc(percentages, averageProcentage, setAverageProcentage);
      calc(price, priceAvg, setPriceAvg);
      setStars(stars);
      setTitles(titles);
    };

    getData();
  }, []);

  return (
    <div className="whiskyContainer">
      {titles ? (
        <p>
          Du har smakt <strong>{titles.length}</strong> ulike whiskyer
        </p>
      ) : null}

      <h2>Destilleri</h2>
      {regions ? (
        <ul>
          {Object.entries(destilery).map(([destilery, value]) => (
            <li key={destilery}>
              <strong>{destilery}</strong>: {value}
            </li>
          ))}
        </ul>
      ) : null}

      <h2>Distrikter</h2>
      {regions ? (
        <ul>
          {Object.entries(regions).map(([region, value]) => (
            <li key={region}>
              <strong>{region}</strong>: {value}
            </li>
          ))}
        </ul>
      ) : null}

      <h2>Land</h2>
      {countries ? (
        <ul>
          {Object.entries(countries).map(([country, value]) => (
            <li key={country}>
              <strong>{country}</strong>: {value}
            </li>
          ))}
        </ul>
      ) : null}
      {averageProcentage ? (
        <div>
          <h2>Gjennomsnittlig prosent av det du har drukket er </h2>
          <p>{averageProcentage}%</p>
        </div>
      ) : null}
      {priceAvg ? (
        <div>
          <h2>Gjennomsnittlig sum på det du har smakt på er</h2>
          <p>{priceAvg}0 NOK</p>
        </div>
      ) : null}
    </div>
  );
};
export default StatisticsPage;
