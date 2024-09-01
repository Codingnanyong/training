import React, { useReducer } from "react";

function Numbers() {
  // reduce
  // const numbers = [28,34,67,68];
  // numbers.reduce((number,nextNumber) => number +nextNumber,0);
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}

export default function App() {
  return <Numbers />;
}
