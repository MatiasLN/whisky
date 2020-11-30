import React from "react";

const SearchBar = ({ search }) => {
  const handleInput = (event) => {
    const { name, value } = event.currentTarget;
    console.log(value);

    if (name === "search") {
      search(value);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Søk etter whisky"
        onChange={(event) => handleInput(event)}
      />
    </div>
  );
};

export default SearchBar;
