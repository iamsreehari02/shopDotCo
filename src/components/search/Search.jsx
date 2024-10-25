import React from "react";
import { FaSearch } from "react-icons/fa";
import { SEARCH_BG_CLR, SEARCH_PRODUCTS } from "../../constants";

const Search = () => {
  return (
    <div className="w-full">
      <div className="relative flex items-center w-full">
        <div className="absolute left-3 text-gray-400">
          <FaSearch size={16} />
        </div>
        <input
          type="text"
          placeholder={SEARCH_PRODUCTS}
          style={{ backgroundColor: SEARCH_BG_CLR }}
          className="w-full pl-10 pr-4 py-2 rounded-2xl text-sm focus:outline-none transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Search;
