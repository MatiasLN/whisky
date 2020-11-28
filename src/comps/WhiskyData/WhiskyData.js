import React, { useState, useEffect } from "react";
import apiKey from "../../api/Vinmonopolet";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
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
          url,
        requestOptions
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading };
};

export default ({ title }) => {
  const { data, loading } = useFetch(title);
  if (title && data.length) {
    return (
      <>
        {loading ? (
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
        )}
      </>
    );
  } else {
    return (
      <>
        <GetWhiskyData notFound />
      </>
    );
  }
};
