import React from "react";

const SearchBar = ({ search }) => {
  const handleInput = (event) => {
    const { name, value } = event.currentTarget;

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
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            console.log("backspace");
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
