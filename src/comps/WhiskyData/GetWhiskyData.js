import React, { useState } from "react";
import apiKey from "../../api/Vinmonopolet";

const GetWhiskyData = ({ notFound }) => {
  const [input, setInput] = useState();
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);

  const handleRequest = () => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Ocp-Apim-Subscription-Key", apiKey);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        "https://apis.vinmonopolet.no/products/v0/details-normal?productShortNameContains=" +
          input,
        requestOptions
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
    document.querySelector(".searchResults").style.display = "block";
  };

  return (
    <>
      <div className="getWhiskyInfo">
        {notFound ? (
          <p className="noWataFound">Fant ikke noe data fra Vinmonopolet</p>
        ) : (
          <p>Stemmer ikke informasjonen?</p>
        )}
        <div className="searchForm">
          <input
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="addNewBtn search" onClick={handleRequest}>
            Finn riktig produkt
          </button>
        </div>
        <div className="searchResults">
          {isLoading ? (
            <h3 className="loadingData">
              Laster inn data fra Vinmonopolet ...
            </h3>
          ) : (
            <ul className="displayData">
              {data &&
                data.map((data) => (
                  <li key={data.basic.productId}>
                    {data.basic.productLongName}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default GetWhiskyData;

// key={data.basic.productId}
// productID={data.basic.productId}
// name={data.basic.productLongName}
// alcohol={data.basic.alcoholContent}
// price={data.prices[0].salesPrice}
// country={data.origins.origin.country}
// region={data.origins.origin.region}
// destilery={data.logistics.manufacturerName}
// descColour={data.description.characteristics.colour}
// descOdour={data.description.characteristics.odour}
// descTaste={data.description.characteristics.taste}
