import React, { useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <form className="d-flex">
        <input
          id="searchBox"
          className="form-control me-2"
          type="search"
          value={searchText}
          onChange={(e) => handleInputChange(setSearchText, e)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
const handleInputChange = (setSearchText, event) => {
  console.log("the input value is", event.target.value);
  setSearchText(event.target.value);
};
export default Search;
