import React from "react";
import useFirestore from "../hooks/useFirestore";
import ImageItem from "./ImageItem";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((item) => (
          <ImageItem
            key={item.id}
            data={item}
            rating={item.star}
          />
        ))}
    </div>
  );
};
export default ImageGrid;
