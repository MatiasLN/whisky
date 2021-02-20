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
  if (!productID) {
    productID = <input type="text" placeholder="Produkt ID" />;
  }

  if (!alcohol) {
    alcohol = <input type="text" placeholder="43" />;
  }

  if (!price) {
    price = <input type="text" placeholder="799" />;
  }

  if (!country) {
    country = <input type="text" placeholder="Skottland" />;
  }

  if (!region) {
    region = <input type="text" placeholder="Islay" />;
  }

  if (!destilery) {
    destilery = <input type="text" placeholder="Bowmore" />;
  }

  if (!descColour) {
    descColour = <input type="text" placeholder="Notater ..." />;
  }

  if (!descOdour) {
    descOdour = <input type="text" placeholder="Notater ..." />;
  }

  if (!descTaste) {
    descTaste = <input type="text" placeholder="Notater ..." />;
  }
  const { state } = useContext(WhiskyContext);
  useEffect(() => {
    console.log(productID);
  }, [state.searchResults]);

  return (
    <>
      <div className="whiskyDetails">
        <h3>Om whiskyen</h3>
        <ul>
          <li>
            <strong>Navn</strong>
            {name}
          </li>
          <li>
            <strong>Produkt ID</strong> {productID}
          </li>
          <li>
            <strong>Alkoholstyrke</strong> {alcohol} %
          </li>
          <li>
            <strong>Pris</strong> {price}0 NOK
          </li>
        </ul>
        <ul>
          <li>
            <strong>Land</strong> {country}
          </li>
          <li>
            <strong>Region</strong> {region}
          </li>
          <li>
            <strong>Destilleri</strong> {destilery}
          </li>
        </ul>
      </div>

      <div className="whiskyDescription">
        <h3>Beskrivelse</h3>
        <ul>
          <li>
            <strong>Farge</strong> {descColour}
          </li>
          <li>
            <strong>Lukt</strong> {descOdour}
          </li>
          <li>
            <strong>Smak</strong> {descTaste}
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProductDetails;
