import React, { createContext, useReducer } from "react";
export const WhiskyContext = createContext();

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {
  // doc ID
  id: localStorage.getItem("id"),
  // product ID
  whisky: "",
  searchResults: "",
  manual: false,
  countedWhiskyData: "",
  currentWhisky: "",
};

export function WhiskyProvider(props) {
  const [state, update] = useReducer(reducer, initialState);

  return (
    <WhiskyContext.Provider value={{ state, update }}>
      {props.children}
    </WhiskyContext.Provider>
  );
}
