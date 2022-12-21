import React from "react";
import { useState, useEffect, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;

    // causa looping infinito (quando altera o valor re-renderiza o componente)
    // setCounter(counter + 1);
  });

  return (
    <div>
      <h2>Use Ref</h2>
      <p>componente renderizou: {numberRef.current}</p>
      <p>counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>contador A</button>
      <p>counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
      <hr />
    </div>
  );
};

export default HookUseRef;
