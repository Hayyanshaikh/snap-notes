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
    <div className='flex flex-col h-full'>
      <div className={`sticky top-0 z-10 py-4 flex items-center justify-between gap-5 transition-all dark:bg-dark bg-white ${isSticky ? 'shadow-lg' : ''} sm:shadow-none px-4 sm:px-0`}>
        <Search className="w-full sm:w-80" onSearch={handleSearch} />
        <p className='text-white flex-[0_0_auto] text-sm sm:text-base'>Total Notes: <span className='font-medium'>{`${filteredData?.length}`.padStart(2, '0')}</span></p>
      </div>
      <NoteList notes={filteredData} isLoading={loading} />
    </div>
  );
};

export default Content;
