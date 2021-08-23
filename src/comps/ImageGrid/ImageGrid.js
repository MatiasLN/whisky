import React from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageItem from "./ImageItem/ImageItem";
import Loading from "../../images/loading.gif";

const ImageGrid = ({ data, setData, rating, setRating, search }) => {
  const { docs, loading } = useFirestore();

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
                  id={item.id}
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

  return (
    <div>
      <img className="loadingAnimation" src={Loading} alt="loading animation" />
      <p className="loading">Laster ...</p>;
    </div>
  );
};
export default ImageGrid;
