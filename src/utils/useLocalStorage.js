// ---------- Custom hook ----------
// A "custom hook" is just a normal function whose name starts with "use"
// and that itself uses other hooks inside (here: useState + useEffect).
// It lets us reuse the same LocalStorage logic in many components without
// copy-pasting the same code everywhere.

import { useState, useEffect } from "react";

// ---------- Browser storage + JSON ----------
// LocalStorage can only store STRINGS, so we JSON.stringify() before saving
// and JSON.parse() after reading.

function useLocalStorage(key, initialValue) {
  // useState: read the existing value ONCE when the component first renders.
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      // If localStorage is unavailable or the stored value is corrupted,
      // just fall back to the initial value instead of crashing the app.
      console.error("Could not read from localStorage:", error);
      return initialValue;
    }
  });

  // useEffect: every time "value" changes, save the new value back to localStorage.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Could not write to localStorage:", error);
    }
  }, [value, key]);

  // Return the value and its setter, just like useState does.
  return [value, setValue];
}

export default useLocalStorage;