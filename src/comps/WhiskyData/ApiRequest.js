import React, { useEffect, useState } from "react";
import apiKey from "../../api/Vinmonopolet";

const ApiRequest = ({ request }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  function useFetch(url) {
    const [data, setData] = useState("");

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
      };
      fetchData();
    }, []);

    useEffect(() => {
      setResponse(data);
      setLoading(false);
    }, [data]);
  }

  useFetch(request);

  if (response && response.length) {
    return (
      <>
        {loading ? (
          <h2 className="loadingData">Laster inn data fra Vinmonopolet ...</h2>
        ) : (
          <div className="whiskyDetailsContainer">
            {response &&
              response.map((data) => console.log(data.basic.productLongName))}
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <p>Det er dessverre ikke noe data :(</p>
      </>
    );
  }
};

export default ApiRequest;
