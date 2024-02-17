"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="flex items-center ring-2 w-[400px] ring-gray-400 bg-white  py-2 rounded-md ">
      <Search className="h-4 text-gray-400" />
      <input
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-2 text-xs bg-white outline-none"
      />
    </div>
  );
};

export default SearchBar;
