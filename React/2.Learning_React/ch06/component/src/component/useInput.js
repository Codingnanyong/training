import { useState } from "react";

export const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);
  return [
    { value, onchange: (e) => setValue(e.target.value) },
    () => setValue(initailValue),
  ];
};
