import React, { useContext, useEffect } from "react";
import { WhiskyContext } from "../../context/WhiskyContext";

let ProductDetails = ({
  productID,
  name,
  alcohol,
  price,
  country,
  region,
  destilery,
  descColour,
  descOdour,
  descTaste,
}) => {
  const { update } = useContext(WhiskyContext);
  useEffect(() => {
    update({ whisky: productID });
  }, []);

  return (
    <>
      <div className="whiskyDetails">
        <h3>Om whiskyen</h3>
        <ul>
          <li>Navn: {name}</li>
          <li>Produkt ID: {productID}</li>
          <li>Alkoholstyrke: {alcohol + "%"}</li>
          <li>Pris: {price + "0 NOK"}</li>
          <li>Land: {country}</li>
          <li>Region: {region}</li>
          <li>Destilleri: {destilery}</li>
        </ul>
      </div>

      <div className="whiskyDescription">
        <h3>Beskrivelse</h3>
        <ul>
          <li>Farge: {descColour}</li>
          <li>Lukt: {descOdour}</li>
          <li>Smak: {descTaste}</li>
        </ul>
      </div>
    </>
  );
};
export default ProductDetails;
