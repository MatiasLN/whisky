import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";

let ProductDetails = ({ name, db }) => {
  const [title, setTitle] = useState("");
  const [productID, setProductID] = useState("");
  const [percentage, setPercentage] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [destilery, setDestilery] = useState("");
  const [descColour, setDescColour] = useState("");
  const [descOdour, setDescOdour] = useState("");
  const [descTaste, setDescTaste] = useState("");
  const [id] = useState(localStorage.getItem("id"));

  const user = useContext(UserContext);
  let uid = user.user.uid;
  const collectionRef = projectFirestore.collection(uid).doc(id);

  // create collection item if it does not exist
  useEffect(() => {
    if (!db.polet_name) {
      collectionRef.update({
        polet_name: name,
      });
    } else {
      setTitle(db.polet_name);
    }

    if (!db.polet_productID) {
      collectionRef.update({
        polet_productID: "",
      });
    } else {
      setProductID(db.polet_productID);
    }

    if (!db.polet_percentage) {
      collectionRef.update({
        polet_percentage: "",
      });
    } else {
      setPercentage(db.polet_percentage);
    }

    if (!db.polet_price) {
      collectionRef.update({
        polet_price: "",
      });
    } else {
      setPrice(db.polet_price);
    }

    if (!db.polet_country) {
      collectionRef.update({
        polet_country: "",
      });
    } else {
      setCountry(db.polet_country);
    }

    if (!db.polet_region) {
      collectionRef.update({
        polet_region: "",
      });
    } else {
      setRegion(db.polet_region);
    }

    if (!db.polet_destilery) {
      collectionRef.update({
        polet_destilery: "",
      });
    } else {
      setDestilery(db.polet_destilery);
    }

    if (!db.polet_descColour) {
      collectionRef.update({
        polet_descColour: "",
      });
    } else {
      setDescColour(db.polet_descColour);
    }

    if (!db.polet_descTaste) {
      collectionRef.update({
        polet_descTaste: "",
      });
    } else {
      setDescTaste(db.polet_descTaste);
    }

    if (!db.polet_descOdour) {
      collectionRef.update({
        polet_descOdour: "",
      });
    } else {
      setDescOdour(db.polet_descOdour);
    }
  }, []);

  useEffect(() => {
    collectionRef.update({
      polet_name: title,
      polet_productID: productID,
      polet_percentage: percentage,
      polet_price: price,
      polet_country: country,
      polet_region: region,
      polet_destilery: destilery,
      polet_descColour: descColour,
      polet_descTaste: descTaste,
      polet_descOdour: descOdour,
    });
  }, [
    collectionRef,
    title,
    productID,
    percentage,
    price,
    country,
    region,
    destilery,
    descColour,
    descTaste,
    descOdour,
  ]);

  return (
    <>
      <div className="whiskyDetails">
        <h3>Om whiskyen</h3>
        <ul>
          <li>
            <strong>Navn</strong>
            <input
              className={title ? "hasValue" : ""}
              id="input"
              type="text"
              placeholder={title ? title : "Legg til navn"}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li>
            <strong>Produkt ID</strong>
            <input
              className={productID ? "hasValue" : ""}
              type="text"
              placeholder={productID ? productID : "Legg til produkt ID"}
              onChange={(e) => setProductID(e.target.value)}
            />
          </li>
          <li>
            <strong>Alkoholstyrke</strong>
            <input
              className={percentage ? "hasValue" : ""}
              type="text"
              placeholder={percentage ? percentage : "Legg til % alkoholstyrke"}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </li>
          <li>
            <strong>Pris</strong>
            <input
              className={price ? "hasValue" : ""}
              type="text"
              placeholder={price ? price : "Legg til pris"}
              onChange={(e) => setPrice(e.target.value)}
            />
          </li>
        </ul>
        <ul>
          <li>
            <strong>Land</strong>
            <input
              className={country ? "hasValue" : ""}
              type="text"
              placeholder={country ? country : "Legg til land"}
              onChange={(e) => setCountry(e.target.value)}
            />
          </li>
          <li>
            <strong>Region</strong>
            <input
              className={region ? "hasValue" : ""}
              type="text"
              placeholder={region ? region : "Legg til region"}
              onChange={(e) => setRegion(e.target.value)}
            />
          </li>
          <li>
            <strong>Destilleri</strong>
            <input
              className={destilery ? "hasValue" : ""}
              type="text"
              placeholder={destilery ? destilery : "Legg til destilleri"}
              onChange={(e) => setDestilery(e.target.value)}
            />
          </li>
        </ul>
      </div>

      <div className="whiskyDescription">
        <h3>Beskrivelse</h3>
        <ul>
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
        </ul>
      </div>
    </>
  );
};
export default ProductDetails;
