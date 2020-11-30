import React, { useContext, useEffect, useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageItem from "./ImageItem/ImageItem";
import { UserContext } from "../../context/UserContext";

const ImageGrid = ({ data, setData, rating, setRating }) => {
  const user = useContext(UserContext);
  const uid = user.user.uid;
  const { docs, loading } = useFirestore(uid);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    var allDocs = docs.map((doc) => doc.title);
    setCountries(allDocs);
  }, [search, docs]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading === false) {
    return (
      <>
        <div>
          <input
            type="text"
            placeholder="Search Countries"
            onChange={(e) => setSearch(e.target.value)}
          />
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
                  filteredCountries={filteredCountries}
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
