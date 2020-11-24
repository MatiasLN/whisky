import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";
import { WhiskyContext } from "../../context/WhiskyContext";

import StarRating from "../StarRating/StarRating";
import Image from "../WhiskyItem/Image/Image";
import WhiskyData from "../WhiskyData/WhiskyData";

const ImageItem = () => {
  const [data, setData] = useState("");
  const [rating, setRating] = useState("");
  const user = useContext(UserContext);
  const { state, update } = useContext(WhiskyContext);
  const uid = user.user.uid;

  const collectionRef = projectFirestore.collection(uid).doc(state.id);
  useEffect(() => {
    collectionRef
      .get()
      .then((doc) => {
        setData(doc.data());
        setRating(doc.data().star);
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const handleSetRating = (rating) => {
    setRating(rating);
    collectionRef.update({ star: rating });
  };

  return (
    <div className="whiskyItem">
      <div
        className="image"
        key={state.id}
        onClick={() => {
          //   setCurrentId(state.id);
          //   setData(data);
          //   update({ id: data.id });
        }}
      >
        <Image data={data.url} />
      </div>
      <h2>{data.title}</h2>
      <div
        className="rating"
        onClick={() => {
          //   setCurrentId(data.id);
        }}
        data={data.id}
      >
        <StarRating rating={rating} setRating={handleSetRating} />
      </div>
      <WhiskyData />
    </div>
  );
};

export default ImageItem;
