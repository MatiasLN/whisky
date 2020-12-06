import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";

import StarRating from "../StarRating/StarRating";
import Image from "../WhiskyItem/Image/Image";
import WhiskyData from "../WhiskyData/WhiskyData";
import Modal from "../Modal/Modal";

const ImageItem = () => {
  const [data, setData] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [id] = useState(localStorage.getItem("id"));

  const user = useContext(UserContext);
  const uid = user.user.uid;

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
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

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

  return (
    <>
      <div className="whiskyItem">
        <div className="image" key={id} onClick={handleModal}>
          <Image data={url} />
        </div>
        <h2>{title}</h2>
        <div className="notes">
          <textarea
            id="file-notes"
            rows={5}
            cols={5}
            placeholder="Smaksnotater ..."
            value={notes}
            onChange={changeHandlerTextarea}
          />
        </div>
        <div className="rating">
          <StarRating rating={rating} setRating={handleSetRating} />
        </div>
        <WhiskyData title={title} db={data} />
      </div>
      <Modal url={url} />
    </>
  );
};

export default ImageItem;
