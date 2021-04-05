import React, { useContext } from "react";
import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";
import FetchData from "./FetchData";
import EditWhiskyDetails from "../WhiskyDetails/EditWhiskyDetails";
import Stats from "../Stats/Stats";

import { WhiskyContext } from "../../context/WhiskyContext";

const WhiskyData = ({ title, db }) => {
  const origTitle = title;
  title = title.split(" ").join("_");
  const { state } = useContext(WhiskyContext);

  if (state.manual === true) {
    console.log("edit data");
    return <EditWhiskyDetails db={db} />;
  } else if (
    db.polet_percentage ||
    db.polet_country ||
    db.polet_price ||
    db.polet_region ||
    db.polet_descColour
  ) {
    console.log("has data");

    return (
      <>
        <div className="whiskyDetailsContainer">
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
          <GetWhiskyData />
        </div>

        <div className="fullWidth">
          <Stats db={db} />
        </div>
        <div className="searchBlock">
          <GetWhiskyData />
        </div>
      </>
    );
  } else {
    console.log("has no data");

    return (
      <>
        <div className="whiskyDetailsContainer">
          <FetchData title={title} origTitle={origTitle} db={db} />
        </div>
        <div className="searchBlock" style={{ marginTop: "-50px" }}>
          <GetWhiskyData />
        </div>
      </>
    );
  }
};

export default WhiskyData;
