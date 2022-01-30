import React from "react";
import { SearchIcon } from "../../icons";
import "./Search.css";
const Search = ({ handleSearchInput }) => {
  return (
    <div className="search">
      <SearchIcon size="1.3em" />
      <input
        type="text"
        placeholder="Search Notes"
        onChange={(e) => handleSearchInput(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
