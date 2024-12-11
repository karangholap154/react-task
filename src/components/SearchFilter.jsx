import React, { useState } from "react";

const SearchFilter = () => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [search, setSearch] = useState("");

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h2>Search Filter</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search names..."
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
