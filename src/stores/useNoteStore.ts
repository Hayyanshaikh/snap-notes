import { create } from 'zustand';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { generateUniqueId } from '../utils/constant';
import { formatDateTime } from '../utils/formatDateTime';

const useNoteStore = create((set) => {
  const [getStoredValue, setStoredValue] = useLocalStorage('notes', []);

  return {
    notes: getStoredValue(),
    addNote: (note: any) => {
      const newNote = {
        ...note,
        id: generateUniqueId("stickypads"),
        date: formatDateTime(new Date().toISOString())
      };
      set((state: any) => {
        const newNotes = [...state.notes, newNote];
        setStoredValue(newNotes);
        return { notes: newNotes };
      });
    },
    editNote: (id: string, note: any) => {
      const updatedNote = { ...note, date: formatDateTime(new Date().toISOString()) };
      set((state: any) => {
        const updatedNotes = state.notes.map((note: any) =>
          note.id === id ? { ...note, ...updatedNote } : note
        );
        setStoredValue(updatedNotes);
        return { notes: updatedNotes };
      });
    },
    deleteNote: (id: string) => {
      set((state: any) => {
        const filteredNotes = state.notes.filter((note: any) => note.id !== id);
        setStoredValue(filteredNotes);
        return { notes: filteredNotes }
      })
    }
  };
});

export default useNoteStore;
