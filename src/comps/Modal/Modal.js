import React, { useState, useContext } from "react";
import StarRating from "./../StarRating/StarRating";
import { projectFirestore } from "../../firebase/config";
import Image from "../ImageGrid/Image/Image";
import { UserContext } from "../../context/UserContext";
import Whisky from "../Whisky/Whisky";

const Modal = ({ data, setData, initRating, rating, setRating }) => {
  const [notes, setNotes] = useState(data.notes);
  [rating, setRating] = useState(data.star);
  const user = useContext(UserContext);
  const uid = user.user.uid;

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setData(null);
    }
  };

  const changeHandlerTextarea = (e) => {
    setNotes(e.target.value);
    const collectionRef = projectFirestore.collection(uid).doc(data.id);
    collectionRef.update({ notes: notes });
  };

  const handleSetRating = (rating) => {
    setRating(rating);
    initRating(rating);
    const collectionRef = projectFirestore.collection(uid).doc(data.id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal-container">
        {data.url && (
          <div className="modal-img">
            <Image data={data.url} />
          </div>
        )}
        <div className="modal-content">
          {data.title && <h2>{data.title}</h2>}
          <textarea
            id="file-notes"
            rows={5}
            cols={5}
            placeholder="Smaksnotater ..."
            value={notes}
            onChange={changeHandlerTextarea}
          />
          {data.star && (
            <div className="modal-stars">
              {<StarRating rating={rating} setRating={handleSetRating} />}
            </div>
          )}
        </div>
        <Whisky title={data.title} />
      </div>
    </div>
  );
};
export default Modal;
