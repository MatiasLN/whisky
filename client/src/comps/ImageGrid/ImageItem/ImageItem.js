import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../../../firebase/config";

import StarRating from "../../StarRating/StarRating";
import Image from "../Image/Image";

const ImageItem = ({ data, setData, rating, setRating, search }) => {
  const [id, setCurrentId] = useState(data.id);
  const [uid] = useState(localStorage.getItem("uid"));

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection(uid).doc(id);
    collectionRef.update({ star: rating });
  };

  if (data.title.includes(search)) {
    return (
      <div className="whiskyItem">
        <div
          className="image"
          key={data.id}
          onClick={() => {
            localStorage.setItem("id", data.id);
            setCurrentId(data.id);
            setData(data);
          }}
        >
          <Link to="/whisky">
            <Image data={data.url} />
          </Link>
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
  }
  return <></>;
};

export default ImageItem;
