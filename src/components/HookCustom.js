//hooks
import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>HookCustom</h2>
      <p>atual: {number}</p>
      <p>anterior: {previousValue}</p>
      <button onClick={() => setNumber(number + 15)}>alterar valor</button>
      <hr />
    </div>
  );
};

export default HookCustom;
