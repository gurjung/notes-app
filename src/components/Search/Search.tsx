import React from "react";
import { SearchIcon } from "../../icons";
import "./Search.css";
interface ISearchProps {
  handleSearchInput: (e: string) => void;
}
const Search: React.FC<ISearchProps> = (props) => {
  const { handleSearchInput } = props;
  return (
    <div className="search">
      <SearchIcon size="1.3em" />
      <input
        type="text"
        placeholder="Search Notes"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleSearchInput(e.target.value)
        }
      ></input>
    </div>
  );
};

export default Search;
