import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../../firebase/config";
import { WhiskyContext } from "../../../context/WhiskyContext";

let ProductDetails = ({ name, db }) => {
  const { state, update } = useContext(WhiskyContext);
  const [title, setTitle] = useState(db.polet_name);
  const [productID, setProductID] = useState(db.polet_productID);
  const [percentage, setPercentage] = useState(db.polet_percentage);
  const [price, setPrice] = useState(db.polet_price);
  const [country, setCountry] = useState(db.polet_country);
  const [region, setRegion] = useState(db.polet_region);
  const [destilery, setDestilery] = useState(db.polet_destilery);
  const [descColour, setDescColour] = useState(db.polet_descColour);
  const [descOdour, setDescOdour] = useState(db.polet_descOdour);
  const [descTaste, setDescTaste] = useState(db.polet_descTaste);
  const [id] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));
  const [updateStatus, setUpdateStatus] = useState(state.updateEditedDetails);
  const collectionRef = projectFirestore.collection(uid).doc(id);

  useEffect(() => {
    if (state.updateEditedDetails) {
      setUpdateStatus(true);
    }
  }, [state.updateEditedDetails]);

  useEffect(() => {
    if (updateStatus) {
      const updateDetails = async () => {
        await collectionRef.update({
          polet_name: title,
        });
        db.polet_name = title;

        await collectionRef.update({
          polet_productID: productID,
        });
        db.polet_productID = productID;

        await collectionRef.update({
          polet_percentage: percentage,
        });
        db.polet_percentage = percentage;

        await collectionRef.update({
          polet_price: price,
        });
        db.polet_price = price;

        await collectionRef.update({
          polet_country: country,
        });
        db.polet_country = country;

        await collectionRef.update({
          polet_region: region,
        });
        db.polet_region = region;

        await collectionRef.update({
          polet_destilery: destilery,
        });
        db.polet_destilery = destilery;

        await collectionRef.update({
          polet_descColour: descColour,
        });
        db.polet_descColour = descColour;

        await collectionRef.update({
          polet_descTaste: descTaste,
        });
        db.polet_descTaste = descTaste;

        await collectionRef.update({
          polet_descOdour: descOdour,
        });
        db.polet_descOdour = descOdour;

        await update({ manual: false });
      };
      updateDetails();
      setUpdateStatus(false);
      update({
        updateEditedDetails: (state.updateEditedDetails =
          !state.updateEditedDetails),
      });
    }
  }, [updateStatus]);

  return (
    <>
      <div className="whiskyDetailsContainer">
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
                placeholder={
                  percentage ? percentage : "Legg til % alkoholstyrke"
                }
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
      </div>
    </>
  );
};
export default ProductDetails;
