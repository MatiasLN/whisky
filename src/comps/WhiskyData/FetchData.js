import React, { useState, useEffect } from "react";
import apiKey from "../../api/Vinmonopolet";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";

const FetchData = ({ title }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
          title,
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      if (data.length) {
        setError(null);
        setData(data);
      } else {
        setError(true);
        setData(null);
      }
      setLoading(false);
    };
    fetchData();
  }, [title]);

  return data ? (
    loading ? (
      <h2 className="loadingData">Laster inn data fra Vinmonopolet ...</h2>
    ) : (
      <div className="whiskyDetailsContainer">
        {data &&
          data.map((data) => (
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
        <GetWhiskyData />
      </div>
    )
  ) : (
    <GetWhiskyData notFound />
  );
};

export default FetchData;
