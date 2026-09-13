import { useState } from "react";

// Same custom hook as the other modules. Kept as a local copy here because
// the shared src/utils/ folder is still empty.
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  function updateValue(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, updateValue];
}

export default useLocalStorage;
