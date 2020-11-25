import React, { useState } from "react";
import apiKey from "../../api/Vinmonopolet";
import PlaceHolder from "../../json/WhiskyPlaceholder.json";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";

const WhiskyData = ({ title }) => {
  // should be null on fetch request
  // const [fetchData, setFetchData] = useState(null);
  const [fetchData, setFetchData] = useState(PlaceHolder);
  const [error, setError] = useState(null);

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
    <div className="whiskyDetailsContainer">
      {fetchData &&
        fetchData.map((data) => (
          <WhiskyDetails
            key={data.basic.productId}
            productID={data.basic.productId}
            name={data.basic.productLongName}
            alcohol={data.basic.alcoholContent}
            price={data.prices[0].salesPrice}
            country={data.origins.origin.country}
            region={data.origins.origin.region}
            destilery={data.logistics.manufacturerName}
            descColour={data.description.characteristics.colour}
            descOdour={data.description.characteristics.odour}
            descTaste={data.description.characteristics.taste}
          />
        ))}

      {error && <div className="error">{error}</div>}

      <div className="getWhiskyInfo">
        <p>Stemmer ikke informasjonen?</p>
        <button
          className="addNewBtn"
          onClick={() => getWhiskyData("bowmore_15")}
        >
          Finn produkt
        </button>
      </div>
    </div>
  );
};

export default WhiskyData;
