import React from "react";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";
import { useFetch } from "../../api/useFetch";

export default ({ title }) => {
  let name = localStorage.getItem("polet_name");
  let key = localStorage.getItem("polet_name");
  let productID = localStorage.getItem("polet_productID");
  let percentage = localStorage.getItem("polet_percentage");
  let country = localStorage.getItem("polet_country");
  let region = localStorage.getItem("polet_region");
  let destilery = localStorage.getItem("polet_destilery");
  let descColour = localStorage.getItem("polet_descColour");
  let descTaste = localStorage.getItem("polet_descTaste");
  let descOdour = localStorage.getItem("polet_descOdour");
  if (name) {
    return (
      <>
        <div className="whiskyDetailsContainer">
          <WhiskyDetails
            key={key}
            productID={productID}
            name={name}
            alcohol={percentage}
            price={name}
            country={country}
            region={region}
            destilery={destilery}
            descColour={descColour}
            descOdour={descTaste}
            descTaste={descOdour}
          />
          <GetWhiskyData />
        </div>
      </>
    );
  } else {
    const { data, loading } = useFetch(title);
    if (title && data.length) {
      return (
        <>
          {loading ? (
            <h2 className="loadingData">
              Laster inn data fra Vinmonopolet ...
            </h2>
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
  }
};
