import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
  className?: string;
}

const Search: React.FC<Props> = ({ onSearch, className }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={`${className ? className : ""} relative`} >
      <input
        className="peer w-full outline-none text-gray-600 font-normal py-2 pr-4 pl-10 border rounded-full focus:border-black"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <MagnifyingGlass className="absolute peer-focus:text-black left-4 top-1/2 -translate-y-1/2 text-gray-400" weight="regular" size={18} />
    </div >
  );
};

export default Search;
