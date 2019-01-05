import React from "react";

const SearchBar = props => {
  const { searchString, setSearchString } = props;

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
