import React from "react";
import { useState, useEffect, useRef } from "react";

const HookUseRef = () => {
  //#region useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;

    // causa looping infinito (quando altera o valor re-renderiza o componente)
    // setCounter(counter + 1);
  });
  //#endregion

  //#region useRef com DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    setText("");
    inputRef.current.focus();
  };

  //#endregion

  return (
    <div>
      <h2>Use Ref</h2>
      <p>componente renderizou: {numberRef.current}</p>
      <p>counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>contador A</button>
      <p>counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>contador B</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
