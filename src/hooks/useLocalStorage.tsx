import { useState, useEffect } from "react";
import { getLocalStorage } from "../utils/getLocalStorage";
import { setLocalStorage } from "../utils/setLocalStorage";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const storedValue = getLocalStorage(key);
    return storedValue ? storedValue : initialValue;
  });

  useEffect(() => {
    setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};
