import { useState } from "react";

// o hook useState é usado para gerenciar valores (get/set), ao ser alterado o componente é re-renderizado,
//esse comportamento não se aplica ao usar variáveis, por isso usamos states quando necessário

const HookUseState = () => {
  //#region useState
  let userName = "Mateus Castellar";

  const [name, setName] = useState("Mateus Castellar");

  const changeNames = () => {
    userName = "Mateus Henrique Castellar Alves"; //não renderiza novamente o componente
    setName("Mateus Henrque Castellar Alves"); //renderiza novamente o componente
  };
  //#endregion

  //#region useState(input)
  const [age, setAge] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();

    //enviar dados para api
    alert(age);
  };
  //#endregion

  return (
    <div>
      {/* useState */}
      <h2>UseState</h2>
      <p>variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Alterar Nomes</button>

      {/* useState input */}
      <p>altere a idade:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Idade</span>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input type="submit" value="enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;
