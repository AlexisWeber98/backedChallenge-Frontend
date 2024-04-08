import React, { useEffect, useState } from "react";
import { useStore } from "../../store/products";

const SearchBar: React.FC = () => {
  const { searchByTitle } = useStore();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchByTitle(searchInput);
  }, [searchInput]);

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  return (
    <nav>
      <div>
        <input
        className="p-2"
          type="text"
          placeholder="Search....."
          onChange={handlerChange}
          value={searchInput}
        />
      </div>
    </nav>
  );
};

export default SearchBar;
