import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

// This context provider is passed to any component requiring the context
export const GlobalProvider = ({ children }) => {
  
  const newRating = (data) => {
    if (data) {
      setRating(data);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        rating,
        setRating,
        newRating,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
