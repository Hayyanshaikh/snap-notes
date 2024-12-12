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
        className="peer bg-white dark:bg-light text-dark dark:text-white w-full outline-none font-normal py-2 pr-4 pl-10 border border-black/20 dark:border-light rounded-full focus:border-black dark:focus:border-white/[15%] dark:font-light transition-all"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <MagnifyingGlass className="absolute transition-all peer-focus:text-dark dark:peer-focus:text-white left-4 top-1/2 -translate-y-1/2 text-gray-400" weight="regular" size={18} />
    </div >
  );
};

export default Search;
