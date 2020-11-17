import React, { useState, useContext } from "react";
import StarRating from "./StarRating";
import { projectFirestore } from "../firebase/config";
import Image from "./Image";
import { UserContext } from "../context/UserContext";

const ImageItem = ({ data, setData, rating, setRating }) => {
  const [id, setCurrentId] = useState(data.id);
  const user = useContext(UserContext);
  const uid = user.user.uid;

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection(uid).doc(id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="coffeItem">
      <div
        className="image"
        key={data.id}
        onClick={() => {
          setCurrentId(data.id);
          setData(data);
        }}
      >
        <Image data={data.url} />
      </div>
      <h2>{data.title}</h2>
      <div
        className="rating"
        onClick={() => {
          setCurrentId(data.id);
        }}
        data={data.id}
      >
        <StarRating rating={rating} setRating={handleSetRating} />
      </div>
    </div>
  );
};

export default ImageItem;
