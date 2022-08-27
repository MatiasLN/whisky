import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { WhiskyContext } from "../../context/WhiskyContext";
import { useHistory } from "react-router-dom";

import StarRating from "../StarRating/StarRating";
import Image from "../WhiskyItem/Image/Image";
import WhiskyData from "../WhiskyItem/WhiskyData/WhiskyData";
import Modal from "../Modal/Modal";
import Stats from "../Stats/Stats";
import Loading from "../Loading/Loading";
import EditUpload from "../Forms/EditUpload/EditUpload";

const ImageItem = () => {
  const [data, setData] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [id] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));
  const [loading, setLoading] = useState(true);
  const [isActive, setActive] = useState(false);

  const { state, update } = useContext(WhiskyContext);
  const history = useHistory();

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
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
    setLoading(false);
  }, [state.searchResults, uid, id, loading, state.imgUrl]);

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

  const showDeletePopup = () => {
    document.querySelector(".deleteItemContainer").style.display = "block";
  };

  const closeDeletePopup = () => {
    document.querySelector(".deleteItemContainer").style.display = "none";
  };

  const confirmDelete = () => {
    const collectionRef = projectFirestore.collection(uid).doc(id);
    const executeDelete = async () => {
      await collectionRef.delete();
    };
    executeDelete();
    history.push("/");
  };

  if (loading === true) {
    return <Loading />;
  }

  return (
    <>
      <div className="whiskyItem">
        {isActive ? (
          <div className="imageContainer">
            <EditUpload />
            <div className="image" key={id}>
              <Image data={url} edit={isActive} />
            </div>
          </div>
        ) : (
          <div className="image" key={id}>
            <Image data={url} edit={isActive} />
          </div>
        )}
        <div className="titleContainer">
          <h2>{title}</h2>
          <div className="buttonGroup">
            <button className="deleteButton" onClick={showDeletePopup}>
              Slett
            </button>

            {isActive ? (
              <button
                className="editButton"
                onClick={() => {
                  update({
                    updateEditedDetails: (state.updateEditedDetails =
                      !state.updateEditedDetails),
                    edit: { imgUrl: null },
                  });
                  setActive(false);
                }}
              >
                Lagre endringer
              </button>
            ) : (
              <button
                className="active editButton"
                onClick={() => {
                  update({
                    manual: (state.manual = !state.manual),
                  });
                  setActive(true);
                }}
              >
                Rediger
              </button>
            )}
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
      <div className="deleteItemContainer">
        <div className="deleteItem">
          <p className="deleteText">Vil du slette {title}?</p>
          <div className="buttonGroup">
            <button className="deleteButton" onClick={confirmDelete}>
              Ja, slett
            </button>
            <button className="closeButton" onClick={closeDeletePopup}>
              Nei, gå tilbake
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageItem;
