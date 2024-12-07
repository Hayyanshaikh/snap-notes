import React from 'react';
import Note from './Note';
import Loading from '../common/Loading';

interface Props {
  notes: [];
  isLoading?: boolean;
}

const NoteList: React.FC<Props> = ({ notes, isLoading }) => {
  return (
    <div className='sm:mt-8'>
      <h2 className='text-2xl text-black font-medium px-4 sm:px-0'>Notes</h2>
      {
        isLoading ? <Loading /> :
          <div className='note_list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0 mt-5 sm:overflow-auto sm:max-h-[72vh] sm:pr-2'>
            {
              notes?.map((note: any, index: number) => (
                note?.title && <Note title={note.title} key={index} content={note?.content} />
              ))
            }
          </div>
      }
    </div>
  );
};

export default NoteList;
