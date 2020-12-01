import React, { useState } from "react";

import ImageGrid from "../comps/ImageGrid/ImageGrid";
import UploadForm from "../comps/Forms/UploadForm";
import SearchBar from "../comps/SearchBar/SearchBar";

const Home = () => {
  const newRating = (res) => {
    if (res) {
      setRating(res);
    }
  };

  const searchCallback = (res) => {
    console.log();
    if (res) {
      searchResult(res);
    }
  };

  const backspaceCallback = (res) => {
    if (res) {
      setBackspace(true);
    }
  };

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);
  const [result, searchResult] = useState("");
  const [backspace, setBackspace] = useState(false);

  return (
    <>
      <SearchBar searchCallback={searchCallback} />
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
