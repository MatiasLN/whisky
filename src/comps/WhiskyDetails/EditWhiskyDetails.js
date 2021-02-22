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

  useEffect(() => {
    if (db.polet_alcohol) {
      setPercentage(db.polet_alcohol);
    }

    if (db.polet_name) {
      setTitle(db.polet_name);
    }

    if (db.polet_productID) {
      setProductID(db.polet_productID);
    }

    if (db.polet_percentage) {
      setPercentage(db.polet_percentage);
    }

    if (db.polet_price) {
      setPrice(db.polet_price);
    }

    if (db.polet_country) {
      setCountry(db.polet_country);
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
    });
  }, [title, productID, percentage, price, country, region, destilery]);

  return (
    <>
      <div className="whiskyDetails">
        <h3>Om whiskyen</h3>
        <ul>
          <li>
            <strong>Navn</strong>
            <input
              type="text"
              placeholder={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li>
            <strong>Produkt ID</strong>
            <input
              type="text"
              placeholder={productID}
              onChange={(e) => setProductID(e.target.value)}
            />
          </li>
          <li>
            <strong>Alkoholstyrke</strong>
            <input
              type="text"
              placeholder={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
            %
          </li>
          <li>
            <strong>Pris</strong>
            <input
              type="text"
              placeholder={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            NOK
          </li>
        </ul>
        <ul>
          <li>
            <strong>Land</strong>
            <input
              type="text"
              placeholder={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </li>
          <li>
            <strong>Region</strong>
            <input
              type="text"
              placeholder={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </li>
          <li>
            <strong>Destilleri</strong>
            <input
              type="text"
              placeholder={"Bowmore"}
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
              type="text"
              placeholder={"Beskrivelse av fargen ..."}
              onChange={(e) => setDescColour(e.target.value)}
            />
          </li>
          <li>
            <strong>Lukt</strong>
            <input
              type="text"
              placeholder={"Beskrivelse av lukten ..."}
              onChange={(e) => setDescOdour(e.target.value)}
            />
          </li>
          <li>
            <strong>Smak</strong>
            <input
              type="text"
              placeholder={"Beskrivelse av smaken ..."}
              onChange={(e) => setDescTaste(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProductDetails;
