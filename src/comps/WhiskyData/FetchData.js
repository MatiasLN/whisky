import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";

import apiKey from "../../api/Vinmonopolet";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";

const FetchData = ({ title, origTitle, db }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id] = useState(localStorage.getItem("id"));

  const user = useContext(UserContext);
  let uid = user.user.uid;
  const collectionRef = projectFirestore.collection(uid).doc(id);

  useEffect(() => {
    const fetchData = async () => {
      console.log("running auto fetch");

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
      if (data.length) {
        setError(null);
        setData(data);
        data.map((data) =>
          collectionRef.update({
            polet_name: data.basic.productLongName,
            polet_productID: data.basic.productId,
            polet_percentage: data.basic.alcoholContent,
            polet_price: data.prices[0].salesPrice,
            polet_country: data.origins.origin.country,
            polet_region: data.origins.origin.region,
            polet_destilery: data.logistics.manufacturerName,
            polet_descColour: data.description.characteristics.colour,
            polet_descTaste: data.description.characteristics.taste,
            polet_descOdour: data.description.characteristics.odour,
          })
        );
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
      <>
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
      </>
    )
  ) : (
    <>
      <WhiskyDetails
        key={db.productID}
        origTitle={origTitle}
        productID={db.polet_productID}
        name={db.polet_name}
        alcohol={db.polet_percentage}
        price={db.polet_price}
        country={db.polet_country}
        region={db.polet_region}
        destilery={db.polet_destilery}
        descColour={db.polet_descColour}
        descOdour={db.polet_descOdour}
        descTaste={db.polet_descTaste}
      />
      <GetWhiskyData notFound />
    </>
  );
};

export default FetchData;
