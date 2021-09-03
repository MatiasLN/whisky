import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";

const Statistics = () => {
  const [uid] = useState(localStorage.getItem("uid"));
  const [regions] = useState([]);
  const [regionCount, setRegionCount] = useState(null);
  const [price] = useState([]);
  const [priceAvg, setPriceAvg] = useState([]);
  const [percentages] = useState([]);
  const [averageProcentage, setAverageProcentage] = useState(null);
  const [countries] = useState([]);
  const [countryCount, setCountryCount] = useState(null);
  const [destilery] = useState([]);
  const [destilleryCount, setDestilleryCount] = useState(null);
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

  function count(value, set) {
    var total = 0;
    Object.entries(value).map(([]) => (total += 1));
    set(total);
  }

  useEffect(() => {
    const getData = async () => {
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
      count(destilery, setDestilleryCount);
      count(countries, setCountryCount);
      count(regions, setRegionCount);
      setStars(stars);
      setTitles(titles);
    };

    getData();
  }, []);

  return (
    <>
      <div className="numberTasted">
        {titles ? (
          <p>
            Du har smakt <strong>{titles.length}</strong> ulike whiskyer.
          </p>
        ) : null}
      </div>

      <h1>Dette er fordelt på</h1>
      <div className="destileriesContainer">
        <h2>{destilleryCount} destillerier</h2>
        {destilery ? (
          <ul>
            {Object.entries(destilery).map(([destilery, value]) => (
              <li key={destilery}>
                <p>{destilery}</p> <span>{value}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="districtsContainer">
        <h2>{regionCount} Distrikter</h2>
        {regions ? (
          <ul>
            {Object.entries(regions).map(([region, value]) => (
              <li key={region}>
                <p>{region}</p> <span>{value}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="countriesContainer">
        <h2>{countryCount} Land</h2>
        {countries ? (
          <ul>
            {Object.entries(countries).map(([country, value]) => (
              <li key={country}>
                <p>{country}</p> <span>{value}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

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
            Gjennomsnittlig pris på flaskene er <br />{" "}
            <strong>{priceAvg}0</strong> NOK
          </p>
        ) : null}
      </div>
    </>
  );
};
export default Statistics;
