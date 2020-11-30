import React from "react";

const SearchBar = ({ search, value }) => {
  const handleChange = (e) => {
    search(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Søk etter whisky"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
