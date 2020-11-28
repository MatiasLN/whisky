import React, { useContext } from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageItem from "./ImageItem/ImageItem";
import { UserContext } from "../../context/UserContext";

const ImageGrid = ({ data, setData, rating, setRating }) => {
  const user = useContext(UserContext);
  const uid = user.user.uid;
  const { docs, loading } = useFirestore(uid);

  if (loading === false) {
    return (
      <div className="img-grid">
        {docs &&
          docs.map((item) => (
            <ImageItem
              key={item.id}
              data={item}
              setData={setData}
              rating={item.star}
              setRating={setRating}
            />
          ))}
      </div>
    );
  }

  return <p className="loading">Laster ...</p>;
};
export default ImageGrid;
