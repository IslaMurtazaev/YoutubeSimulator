import React, { useState } from "react";

const SearchBar = () => {
  const [ searchString, setSearchString ] = useState("");

  const handleSearchStringChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div>
      Searching for {searchString}
      <input
        type="text"
        value={searchString}
        onChange={handleSearchStringChange}
      />
    </div>
  );
};

export default SearchBar;
