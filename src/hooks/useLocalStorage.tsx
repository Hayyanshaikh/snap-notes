import { useCallback } from 'react';

export const useLocalStorageSet = () => {
  const setItem = useCallback((key: string, value: any) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error setting localStorage key:", error);
    }
  }, []);

  return setItem;
};

export const useLocalStorageGet = () => {
  const getItem = useCallback((key: string) => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error("Error getting localStorage key:", error);
      return null;
    }
  }, []);

  return getItem;
};
