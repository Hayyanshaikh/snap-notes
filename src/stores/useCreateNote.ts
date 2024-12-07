import { create } from "zustand";

const useCreateNote = create((set) => ({
  notes: [],
  createNote: (item: any) => set((state: any) => ({
    notes: [...state.notes, item]
  }))
}));

export default useCreateNote;