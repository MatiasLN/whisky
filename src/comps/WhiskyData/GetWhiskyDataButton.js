import React, { useState } from "react";
import ApiRequest from "./ApiRequest";

const GetWhiskyData = ({ notFound }) => {
  const [input, setInput] = useState();
  const [request, setRequest] = useState(false);

  const handleRequest = () => {
    setRequest(input);
  };

  return (
    <>
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
          Finn riktig produkt
        </button>
      </div>

      <div className="getInfo">
        <input type="text" onChange={(event) => setInput(event.target.value)} />
        <button className="submitRequest" onClick={handleRequest}>
          Søk
        </button>
        {request ? <ApiRequest input={input} request={request} /> : null}
      </div>
    </>
  );
};

export default GetWhiskyData;
