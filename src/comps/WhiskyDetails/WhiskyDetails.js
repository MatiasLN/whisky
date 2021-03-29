import React, { useContext, useEffect, useState } from "react";
import { WhiskyContext } from "../../context/WhiskyContext";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";

let ProductDetails = ({
  productID,
  origTitle,
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
  const { state } = useContext(WhiskyContext);

  // search
  useEffect(() => {
    console.log("whiskyId is " + productID);
  }, [state.searchResults]);

  const user = useContext(UserContext);
  let uid = user.user.uid;
  const [id] = useState(localStorage.getItem("id"));
  const collectionRef = projectFirestore.collection(uid).doc(id);

  const [productNameState, setProductName] = useState(name);
  const [productIDState, setProductID] = useState(productID);
  const [percentageState, setPercentage] = useState(alcohol);
  const [priceState, setPrice] = useState(price);
  const [countryState, setCountry] = useState(country);
  const [regionState, setRegion] = useState(region);
  const [destileryState, setDestilery] = useState(destilery);
  const [tasteState, setDescTaste] = useState(descTaste);
  const [odourState, setDescOdour] = useState(descOdour);
  const [colourState, setDescColour] = useState(descColour);

  useEffect(() => {
    collectionRef.update({
      polet_name: productNameState,
      polet_productID: productIDState,
      polet_percentage: percentageState,
      polet_price: priceState,
      polet_country: countryState,
      polet_region: regionState,
      polet_destilery: destileryState,
      polet_descColour: colourState,
      polet_descTaste: tasteState,
      polet_descOdour: odourState,
    });
  }, [
    productNameState,
    productIDState,
    percentageState,
    priceState,
    countryState,
    destileryState,
    regionState,
    tasteState,
    odourState,
    colourState,
  ]);

  return (
    <>
      <div className="whiskyDetails">
        <h3>Om whiskyen</h3>
        <ul>
          {name ? (
            <li>
              <strong>Navn</strong> {name}
            </li>
          ) : (
            <li>
              <strong>Navn</strong>
              <input
                className={origTitle ? "hasValue" : ""}
                type="text"
                placeholder={origTitle ? origTitle : "Legg til informasjon"}
                onChange={(e) => setProductName(e.target.value)}
              />
            </li>
          )}

          {productID ? (
            <li>
              <strong>Produkt ID</strong> #{productID}
            </li>
          ) : (
            <li>
              <strong>Produkt ID</strong>
              <input
                className={productID ? "hasValue" : ""}
                type="text"
                placeholder={productID ? productID : "Legg til informasjon"}
                onChange={(e) => setProductID(e.target.value)}
              />
            </li>
          )}

          {alcohol ? (
            <li>
              <strong>Alkoholstyrke</strong> {alcohol} %
            </li>
          ) : (
            <li>
              <strong>Alkoholstyrke</strong>
              <input
                className={alcohol ? "hasValue" : ""}
                type="text"
                placeholder={alcohol ? alcohol : "Legg til informasjon"}
                onChange={(e) => setPercentage(e.target.value)}
              />
            </li>
          )}

          {price ? (
            <li>
              <strong>Pris</strong> {price} NOK
            </li>
          ) : (
            <li>
              <strong>Pris</strong>
              <input
                className={price ? "hasValue" : ""}
                type="text"
                placeholder={price ? price : "Legg til informasjon"}
                onChange={(e) => setPrice(e.target.value)}
              />
            </li>
          )}
        </ul>

        <ul>
          {country ? (
            <li>
              <strong>Land</strong> {country}
            </li>
          ) : (
            <li>
              <strong>Land</strong>
              <input
                className={country ? "hasValue" : ""}
                type="text"
                placeholder={country ? country : "Legg til informasjon"}
                onChange={(e) => setCountry(e.target.value)}
              />
            </li>
          )}

          {region ? (
            <li>
              <strong>Region</strong> {region}
            </li>
          ) : (
            <li>
              <strong>Region</strong>
              <input
                className={region ? "hasValue" : ""}
                type="text"
                placeholder={region ? region : "Legg til informasjon"}
                onChange={(e) => setRegion(e.target.value)}
              />
            </li>
          )}

          {destilery ? (
            <li>
              <strong>Destilleri</strong> {destilery}
            </li>
          ) : (
            <li>
              <strong>Destilleri</strong>
              <input
                className={destilery ? "hasValue" : ""}
                type="text"
                placeholder={destilery ? destilery : "Legg til informasjon"}
                onChange={(e) => setDestilery(e.target.value)}
              />
            </li>
          )}
        </ul>
      </div>

      <div className="whiskyDescription">
        <h3>Beskrivelse</h3>
        <ul>
          {descColour ? (
            <li>
              <strong>Farge</strong> {descColour}
            </li>
          ) : (
            <li>
              <strong>Farge</strong>
              <input
                className={descColour ? "hasValue" : ""}
                type="text"
                placeholder={
                  descColour ? descColour : "Legg til informasjon om fargen"
                }
                onChange={(e) => setDescColour(e.target.value)}
              />
            </li>
          )}

          {descOdour ? (
            <li>
              <strong>Lukt</strong> {descOdour}
            </li>
          ) : (
            <li>
              <strong>Lukt</strong>
              <input
                className={descOdour ? "hasValue" : ""}
                type="text"
                placeholder={
                  descOdour ? descOdour : "Legg til informasjon om lukten"
                }
                onChange={(e) => setDescOdour(e.target.value)}
              />
            </li>
          )}

          {descTaste ? (
            <li>
              <strong>Smak</strong> {descTaste}
            </li>
          ) : (
            <li>
              <strong>Smak</strong>
              <input
                className={descTaste ? "hasValue" : ""}
                type="text"
                placeholder={
                  descTaste ? descTaste : "Legg til informasjon om smaken"
                }
                onChange={(e) => setDescTaste(e.target.value)}
              />
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
export default ProductDetails;
