import { useEffect, useState } from "react";

//com useEffect podemos controlar quando sua execução deve ser realizada, mesmo que o componente em que etsa
//sofra com uma re-renderizacao!

const HookUseEffect = () => {
  //#region useEffect (sem dependecias)

  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  //#endregion

  //#region useEffect apenas uma vez (com array vazio)
  useEffect(() => {
    console.log("serei executado apenas uma vez");
  }, []);
  //#endregion

  //#region useEffect com array de depencias (sempre que alterado, exeuta o useEffect novamente)
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("sou executado apenas quando anotherNumber muda!");
    }
  }, [anotherNumber]);
  //#endregion

  //#region cleanup (useEffect para evitar vazamento de memoria ao encerrar componente e ir para outro componente/page)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello world");
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber]);

  //#endregion

  return (
    <div>
      <h2>useEffect</h2>
      <p>número: {number}</p>
      <button onClick={changeNumber}>alterar numero</button>

      <p>outro numero: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        mudar numero
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
