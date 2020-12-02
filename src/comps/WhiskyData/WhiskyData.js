import React from "react";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyDataButton from "./GetWhiskyDataButton";
import { useFetch } from "../../api/useFetch";

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
            <GetWhiskyDataButton />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <GetWhiskyDataButton notFound />
      </>
    );
  }
};
