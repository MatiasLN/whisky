import React from "react";
const ProductDetails = ({
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
  return (
    <div className="productData">
      <h3>Informasjon fra Vinmonopolet</h3>
      <ul>
        <li>Navn: {name}</li>
        <li>Produkt ID: {productID}</li>
        <li>Alkoholstyrke: {alcohol + "%"}</li>
        <li>Pris: {price + ",- NOK"}</li>
        <li>{country}</li>
        <li>Region: {region}</li>
        <li>Destilleri: {destilery}</li>
      </ul>

      <h4>Beskrivelse</h4>
      <ul>
        <li>Farge: {descColour}</li>
        <li>Lukt: {descOdour}</li>
        <li>Smak: {descTaste}</li>
      </ul>
    </div>
  );
};
export default ProductDetails;
