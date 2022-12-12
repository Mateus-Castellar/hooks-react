import { useReducer, useState } from "react";

//o hook useReducer é parecido com o useState, porém, além de gerenciar valores, podemos realizar uma function
//apos o valor sofrer um update!

const HookUseReducer = () => {
  //#region introducao useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });
  //#endregion

  //#region useRedicer com actions
  const initialTasks = [
    { id: 1, text: "aprender javascipt" },
    { id: 2, text: "aprender react" },
    { id: 3, text: "aprender clean code" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText(""); //zera o state apos adicionar tarefa
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id: id });
  };

  //#endregion

  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar Número</button>

      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="enviar" />
      </form>

      {tasks &&
        tasks.map((task) => (
          <li onDoubleClick={() => removeTask(task.id)} key={task.id}>
            {task.text}
          </li>
        ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
