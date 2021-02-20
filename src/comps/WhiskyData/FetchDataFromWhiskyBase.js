import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";
import rp from "request-promise";

import WhiskyDetails from "../WhiskyDetails/WhiskyDetails";
import GetWhiskyData from "./GetWhiskyData";

const FetchDataFromWhiskyBase = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    rp(
      "https://cors-anywhere.herokuapp.com/https://www.whiskybase.com/whiskies/whisky/148395/velvet-fig-25-year-old/"
    ).then((html) => console.log(html));
  }, []);

  return <p>hello</p>;
};

export default FetchDataFromWhiskyBase;
