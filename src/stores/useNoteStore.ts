import { create } from 'zustand';
import { useLocalStorage } from '../hooks/useLocalStorage';

const useNoteStore = create((set) => {
  const [getStoredValue, setStoredValue] = useLocalStorage('notes', []);

  return {
    notes: getStoredValue(),
    addNote: (note: any) => {
      set((state: any) => {
        const newNotes = [...state.notes, note];
        setStoredValue(newNotes);
        return { notes: newNotes };
      });
    },
  };
});

export default useNoteStore;
