import React, { useContext, useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageItem from "./ImageItem/ImageItem";
import { UserContext } from "../../context/UserContext";

const ImageGrid = ({
  data,
  setData,
  rating,
  setRating,
  search,
  searchResult,
}) => {
  const user = useContext(UserContext);
  const uid = user.user.uid;
  const { docs, loading } = useFirestore(uid);

  if (loading === false) {
    return (
      <>
        <div>
          <div className="img-grid">
            {docs &&
              docs.map((item) => (
                <ImageItem
                  name={item.title}
                  key={item.id}
                  data={item}
                  setData={setData}
                  rating={item.star}
                  setRating={setRating}
                  search={search}
                />
              ))}
          </div>
        </div>
      </>
    );
  }

  return <p className="loading">Laster ...</p>;
};
export default ImageGrid;
