import React, { useEffect, useState } from 'react';
import Search from '../Search';
import useSearchFilter from '../../hooks/useSearchFilter';
import NoteList from '../Notes/NoteList';
import useNoteStore from '../../stores/useNoteStore';

const Content: React.FC = () => {
  const notes = useNoteStore((state: any) => state.notes);
  const { filteredData, setQuery, loading } = useSearchFilter(notes, ["title", "content"]);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (query: string) => {
    setQuery(query);
  }

  return (
    <div className='flex flex-col sm:gap-8 h-full'>
      <div className={`sticky top-0 z-10 py-3 transition-all dark:bg-dark bg-white ${isSticky ? 'shadow-lg' : ''} mb-5 sm:relative sm:shadow-none sm:py-0 sm:mb-0 px-4 sm:px-0`}>
        <Search className="w-full sm:w-80" onSearch={handleSearch} />
      </div>
      <NoteList notes={filteredData} isLoading={loading} />
    </div>
  );
};

export default Content;
