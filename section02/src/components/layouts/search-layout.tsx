import React, { ReactNode } from "react";
import SearchBar from "../common/SearchBar/SearchBar";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
};

export default SearchLayout;
