import React, { useState } from "react";

import ImageGrid from "../comps/ImageGrid/ImageGrid";
import UploadForm from "../comps/Forms/UploadForm";

const Home = () => {
  const newRating = (data) => {
    if (data) {
      setRating(data);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);

  return (
    <>
      <UploadForm />
      <ImageGrid
        data={data}
        setData={setData}
        rating={rating}
        setRating={setRating}
      />
    </>
  );
};
export default Home;
