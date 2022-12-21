import { useLayoutEffect, useEffect, useState } from "react";

//useLayoutEffect é executado antes de renderizar o componente...

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("qualquer valor");

  useEffect(() => {
    console.log("2");
    setName("mudou de novo");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("outro nome");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>{name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
