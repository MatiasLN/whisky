import React, { useState } from "react";
import apiKey from "./apiKey";
import PlaceHolder from "../../json/WhiskyPlaceholder.json";
import ProductDetails from "./ProductDetails";

const Whisky = ({ title }) => {
  // should be null on fetch request
  // const [fetchData, setFetchData] = useState(null);
  const [fetchData, setFetchData] = useState(PlaceHolder);
  const [error, setError] = useState(null);
  console.log(fetchData);

  const getWhiskyData = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Ocp-Apim-Subscription-Key", apiKey);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://apis.vinmonopolet.no/products/v0/details-normal?productShortNameContains=" +
        data,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setFetchData(result);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="productDataContainer">
      {fetchData && (
        <div className="productData">
          <h3>Informasjon fra Vinmonopolet</h3>
          <ul>
            <li>Navn: {fetchData.map((data) => data.basic.productLongName)}</li>
            <li>Produkt ID: {fetchData.map((data) => data.basic.productId)}</li>
            <li>
              Alkoholstyrke:{" "}
              {fetchData.map((data) => data.basic.alcoholContent + "%")}
            </li>
            <li>
              Pris:{" "}
              {fetchData.map((data) => data.prices[0].salesPrice + ",- NOK")}
            </li>
            <li>
              Produsert: {fetchData.map((data) => data.origins.origin.country)}{" "}
            </li>
            <li>
              Region: {fetchData.map((data) => data.origins.origin.region)}
            </li>
            <li>
              Destilleri:{" "}
              {fetchData.map((data) => data.logistics.manufacturerName)}
            </li>
          </ul>

          <h4>Beskrivelse</h4>
          <ul>
            <li>
              Farge{" "}
              {fetchData.map((data) => data.description.characteristics.colour)}
            </li>
            <li>
              Lukt:{" "}
              {fetchData.map((data) => data.description.characteristics.odour)}
            </li>
            <li>
              Smak:{" "}
              {fetchData.map((data) => data.description.characteristics.taste)}
            </li>
          </ul>
        </div>
      )}
      {error && <div className="error">{error}</div>}

      <div>
        <p>Stemmer ikke informasjonen?</p>
        <button className="addNewBtn" onClick={() => getWhiskyData({ title })}>
          Finn produkt
        </button>
      </div>
    </div>
  );
};

export default Whisky;
