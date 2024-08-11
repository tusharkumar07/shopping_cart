import React from "react";

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="search_bar">
      <input
        type="text"
        value={search}
        placeholder="Search Here..."
        onChange={(e) => onSearchChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
