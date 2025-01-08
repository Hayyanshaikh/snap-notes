import React from 'react';
import Button from '../common/Button';
import { Plus } from '@phosphor-icons/react';
import useNoteStore from '../../stores/useNoteStore';

const AddNote: React.FC = () => {
  const addNote = useNoteStore((state: any) => state.addNote);

  const handleAddNote = () => {
    const note = {
      title: "Note title...",
      content: "Content here...",
    };
    addNote(note);
  };

  return (
    <div className='flex items-center sm:flex-col flex-row-reverse flex-1'>
      <Button
        onClick={handleAddNote}
        className='!p-0 h-9 w-9 sm:mb-6 transition-all !bg-primary active:scale-[0.9]'>
        <Plus size={20} weight="bold" className='text-darker' />
      </Button>
    </div>
  );
};

export default AddNote;