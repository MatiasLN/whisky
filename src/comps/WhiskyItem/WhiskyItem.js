import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";
import { WhiskyContext } from "../../context/WhiskyContext";

import StarRating from "../StarRating/StarRating";
import Image from "../WhiskyItem/Image/Image";
import WhiskyData from "../WhiskyData/WhiskyData";
import Modal from "../Modal/Modal";

const ImageItem = () => {
  const [data, setData] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const user = useContext(UserContext);
  const { state } = useContext(WhiskyContext);
  const uid = user.user.uid;
  let whiskyName = state.whisky.split(" ").join("_");

  const collectionRef = projectFirestore.collection(uid).doc(state.id);
  useEffect(() => {
    collectionRef
      .get()
      .then((doc) => {
        setData(doc.data());
        setRating(doc.data().star);
        setNotes(doc.data().notes);
        setUrl(doc.data().url);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const handleSetRating = (rating) => {
    setRating(rating);
    collectionRef.update({ star: rating });
  };

  const changeHandlerTextarea = (e) => {
    setNotes(e.target.value);
    collectionRef.update({ notes: notes });
  };

  const handleModal = () => {
    document.querySelector(".backdrop").style.display = "block";
  };

  return (
    <>
      <div className="whiskyItem">
        <div className="image" key={state.id} onClick={handleModal}>
          <Image data={data.url} />
        </div>
        <h2>{data.title}</h2>
        <div className="notes">
          <textarea
            id="file-notes"
            rows={5}
            cols={5}
            placeholder="Smaksnotater ..."
            value={data.notes}
            onChange={changeHandlerTextarea}
          />
        </div>
        <div className="rating">
          <StarRating rating={rating} setRating={handleSetRating} />
        </div>
        <WhiskyData title={whiskyName} />
      </div>
      <Modal url={url} />
    </>
  );
};

export default ImageItem;
