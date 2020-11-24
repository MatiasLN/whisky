import React, { useContext } from "react";
import { WhiskyContext } from "../context/WhiskyContext";

import WhiskyItem from "../comps/WhiskyItem/WhiskyItem";

const WhiskyPage = () => {
  const { state } = useContext(WhiskyContext);
  console.log(state.id);

  return (
    <div>
      <WhiskyItem />
    </div>
  );
};
export default WhiskyPage;
