import React from "react";
const getWhiskyData = ({ notFound }) => {
  return (
    <div className="getWhiskyInfo">
      {notFound ? (
        <p className="noWhiskyData">Fant ikke noe data fra Vinmonopolet</p>
      ) : (
        <p>Stemmer ikke informasjonen?</p>
      )}
      <button
        className="addNewBtn"
        onClick={() => alert("Her må det komme en popup med søkefelt")}
      >
        Finn produkt
      </button>
    </div>
  );
};

export default getWhiskyData;
