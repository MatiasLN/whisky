import React from "react";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";
import FetchData from "./FetchData";

const WhiskyData = ({ title, db }) => {
  const origTitle = title;
  title = title.split(" ").join("_");
  if (db.polet_name) {
    return (
      <>
        <div className="whiskyDetailsContainer">
          <WhiskyDetails
            key={db.productID}
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
          <GetWhiskyData />
        </div>
      </>
    );
  } else {
    return (
      <div className="whiskyDetailsContainer">
        <FetchData title={title} origTitle={origTitle} />
      </div>
    );
  }
};

export default WhiskyData;
