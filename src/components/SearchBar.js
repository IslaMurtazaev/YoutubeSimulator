import React from "react";

const SearchBar = ({ searchString, setSearchString }) => {
  const handleSearchStringChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div className="col-md-12 mx-auto">
      <label>
        Search&nbsp;
        <input
          type="text"
          value={searchString}
          onChange={handleSearchStringChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
