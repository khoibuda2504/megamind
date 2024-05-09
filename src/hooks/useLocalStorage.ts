import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      setStoredValue(newValue);
      if (window.localStorage) {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error(
        `Error setting value to localStorage using key '${key}':`,
        error
      );
    }
  };

  useEffect(() => {
    if (window.localStorage) {
      const item = localStorage.getItem(key);
      if (typeof item !== "undefined") {
        try {
          setStoredValue(JSON.parse(item as string));
        } catch (error) {
          console.error(
            `Error parsing localStorage item for key '${key}':`,
            error
          );
          localStorage.removeItem(key);
        }
      }
    }
  }, [key]);

  return [storedValue, setValue];
}
export default useLocalStorage;
