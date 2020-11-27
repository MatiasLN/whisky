import React, { createContext, useReducer } from "react";
export const WhiskyContext = createContext();

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {
  id: "ioxoXTIksLO2rAedhvHI",
  whisky: "",
};

export function WhiskyProvider(props) {
  const [state, update] = useReducer(reducer, initialState);

  return (
    <WhiskyContext.Provider value={{ state, update }}>
      {props.children}
    </WhiskyContext.Provider>
  );
}
