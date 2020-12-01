import React, { useState } from "react";
import { useHistory } from "react-router";

const SearchBar = ({ searchCallback }) => {
  const [search, setSearch] = useState("");
  const [backspace, setBackspace] = useState(false);

  const history = useHistory();
  const handleInput = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "search") {
      searchCallback(value);
      setSearch(value);
    }
  };

  // force reload page when there is just one char left after pressing backspace
  // because I can't figure out how to filter search properly :(
  if (backspace && search.length === 1) {
    history.go(0);
  }

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Søk etter whisky"
        onChange={(event) => handleInput(event)}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            setBackspace(true);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
