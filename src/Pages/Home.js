import React, { useState } from "react";

import ImageGrid from "../comps/ImageGrid/ImageGrid";
import UploadForm from "../comps/Forms/UploadForm";
import SearchBar from "../comps/SearchBar/SearchBar";

const Home = () => {
  const newRating = (data) => {
    if (data) {
      setRating(data);
    }
  };

  const searchCallback = (result) => {
    if (result) {
      searchResult(result);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);
  const [result, searchResult] = useState("");

  return (
    <>
      <SearchBar value={result} search={searchCallback} />
      <UploadForm />
      <ImageGrid
        data={data}
        setData={setData}
        rating={rating}
        setRating={setRating}
        search={result}
      />
    </>
  );
};
export default Home;
