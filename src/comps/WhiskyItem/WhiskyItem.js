import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { WhiskyContext } from "../../context/WhiskyContext";

import StarRating from "../StarRating/StarRating";
import Image from "../WhiskyItem/Image/Image";
import WhiskyData from "../WhiskyData/WhiskyData";
import Modal from "../Modal/Modal";
import Stats from "../Stats/Stats";
import WhiskyDeleteItem from "../WhiskyDeleteItem/WhiskyDeleteItem";

const ImageItem = () => {
  const [data, setData] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [id] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));

  const { state, update } = useContext(WhiskyContext);

  useEffect(() => {
    const collectionRef = projectFirestore.collection(uid).doc(id);
    collectionRef
      .get()
      .then((doc) => {
        setData(doc.data());
        setRating(doc.data().star);
        setNotes(doc.data().notes);
        setUrl(doc.data().url);
        setTitle(doc.data().title);
        update({
          currentWhisky: {
            notes: notes,
            polet_country: doc.data().polet_country,
            polet_descColour: doc.data().polet_descColour,
            polet_descOdour: doc.data().polet_descOdour,
            polet_descTaste: doc.data().polet_descTaste,
            polet_destilery: doc.data().polet_destilery,
            polet_name: doc.data().polet_name,
            polet_percentage: doc.data().polet_percentage,
            polet_price: doc.data().polet_price,
            polet_productID: doc.data().polet_productID,
            polet_region: doc.data().polet_region,
            star: doc.data().star,
            title: doc.data().title,
            url: doc.data().url,
          },
        });

        // const updateData = async () => {
        //   if (!doc.data().polet_name) {
        //     await collectionRef.update({
        //       polet_name: "",
        //     });
        //   }

        //   if (!doc.data().polet_productID) {
        //     await collectionRef.update({
        //       polet_productID: "",
        //     });
        //   }

        //   if (!doc.data().polet_percentage) {
        //     await collectionRef.update({
        //       polet_percentage: "",
        //     });
        //   }

        //   if (!doc.data().polet_price) {
        //     await collectionRef.update({
        //       polet_price: "",
        //     });
        //   }

        //   if (!doc.data().polet_country) {
        //     await collectionRef.update({
        //       polet_country: "",
        //     });
        //   }

        //   if (!doc.data().polet_region) {
        //     await collectionRef.update({
        //       polet_region: "",
        //     });
        //   }

        //   if (!doc.data().polet_destilery) {
        //     await collectionRef.update({
        //       polet_destilery: "",
        //     });
        //   }

        //   if (!doc.data().polet_descColour) {
        //     await collectionRef.update({
        //       polet_descColour: "",
        //     });
        //   }

        //   if (!doc.data().polet_descTaste) {
        //     await collectionRef.update({
        //       polet_descTaste: "",
        //     });
        //   }

        //   if (!doc.data().polet_descOdour) {
        //     await collectionRef.update({
        //       polet_descOdour: "",
        //     });
        //   }
        // };
        // updateData();
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [state.searchResults, uid, id]);

  const handleSetRating = (rating) => {
    const collectionRef = projectFirestore.collection(uid).doc(id);
    setRating(rating);
    collectionRef.update({ star: rating });
  };

  const changeHandlerTextarea = (e) => {
    const collectionRef = projectFirestore.collection(uid).doc(id);
    setNotes(e.target.value);
    collectionRef.update({ notes: notes });
  };

  const handleModal = () => {
    document.querySelector(".backdrop").style.display = "block";
  };

  const showDeletePopup = () => {
    document.querySelector(".deleteItemContainer").style.display = "block";
  };

  return (
    <>
      {uid ? (
        <>
          <div className="whiskyItem">
            <div className="image" key={id} onClick={handleModal}>
              <Image data={url} />
            </div>
            <div className="titleContainer">
              <h2>{title}</h2>
              <div className="buttonGroup">
                <button className="deleteButton" onClick={showDeletePopup}>
                  Slett
                </button>
                <button
                  className="editButton"
                  onClick={() => {
                    update({ manual: true });
                  }}
                >
                  Rediger
                </button>
              </div>
            </div>
            <div className="notes">
              <textarea
                id="file-notes"
                rows={5}
                cols={5}
                placeholder="Smaksnotater ..."
                value={notes ? notes : ""}
                onChange={changeHandlerTextarea}
              />
            </div>
            <div className="rating">
              <h2 className="ratingNumber">{rating} / 10</h2>
              <StarRating rating={rating} setRating={handleSetRating} />
            </div>
            {title && <WhiskyData title={title} db={data} />}
            <Stats db={data} />
          </div>
          <Modal url={url} />
          <WhiskyDeleteItem title={title} />
        </>
      ) : (
        <p>loading ....</p>
      )}
    </>
  );
};

export default ImageItem;
