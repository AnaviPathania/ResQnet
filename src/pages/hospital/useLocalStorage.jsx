import { useState } from "react";

// A CUSTOM HOOK is just a normal function whose name starts with "use",
// that's allowed to call other hooks (like useState) inside it.
// It behaves exactly like useState, but also saves the value in the browser.
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key); // read from browser storage
    return saved ? JSON.parse(saved) : initialValue; // text -> real data
  });

  function updateValue(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); // real data -> text
  }

  return [value, updateValue]; // same shape as useState: [value, setter]
}

export default useLocalStorage;
