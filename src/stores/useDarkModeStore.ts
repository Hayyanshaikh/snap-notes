import { create } from 'zustand';
import { useLocalStorage } from '../hooks/useLocalStorage';

const useDarkModeStore = create((set) => {
  const [getStoredValue, setStoredValue] = useLocalStorage("theme", false);

  return {
    isDarkMode: getStoredValue(),
    toggleDarkMode: () => set((state: any) => {
      const newMode = !state.isDarkMode;
      setStoredValue(newMode);
      return { isDarkMode: newMode };
    }),
  };
});

type DarkModeState = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default useDarkModeStore as () => DarkModeState;
