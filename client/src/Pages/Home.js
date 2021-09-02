import React, { useState } from "react";

import ImageGrid from "../comps/ImageGrid/ImageGrid";
import UploadForm from "../comps/Forms/UploadForm";
import FilterInput from "../comps/FilterInput/FilterInput";

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

  const [data, setData] = useState(null);
  const [rating, setRating] = useState(newRating);
  const [result, searchResult] = useState("");

  return (
    <section>
      <UploadForm />
      <FilterInput searchCallback={searchCallback} />
      <ImageGrid
        data={data}
        setData={setData}
        rating={rating}
        setRating={setRating}
        search={result}
      />
    </section>
  );
};
export default Home;
