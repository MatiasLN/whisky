import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../../../firebase/config";
import { UserContext } from "../../../context/UserContext";
import { WhiskyContext } from "../../../context/WhiskyContext";

import StarRating from "../../StarRating/StarRating";
import Image from "../Image/Image";

const ImageItem = ({
  data,
  setData,
  rating,
  setRating,
  search,
  filteredCountries,
}) => {
  const [id, setCurrentId] = useState(data.id);
  const user = useContext(UserContext);
  const { update } = useContext(WhiskyContext);
  const uid = user.user.uid;
  console.log("search is " + search);
  console.log("filtered " + filteredCountries);

  const handleSetRating = (rating) => {
    setRating(rating);

    const collectionRef = projectFirestore.collection(uid).doc(id);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="whiskyItem">
      <div
        className="image"
        key={data.id}
        onClick={() => {
          setCurrentId(data.id);
          setData(data);
          update({ id: data.id });
          update({ whisky: data.title });
        }}
      >
        <Link to="/whiskyType">
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
};

export default ImageItem;
