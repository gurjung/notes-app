import React from "react";
import { MdSearch } from "react-icons/md";
export const Search = ({ handleSearchInput }) => {
  return (
    <div className="search">
      <MdSearch size="1.3em" />
      <input
        type="text"
        placeholder="Search Notes"
        onChange={(e) => handleSearchInput(e.target.value)}
      ></input>
    </div>
  );
};
