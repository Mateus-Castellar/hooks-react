import React from "react";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />

      <h2>Usando contexto api do react: {contextValue}</h2>
      <hr />

      <HookUseRef />
      <HookUseCallback />
    </div>
  );
};

export default Home;
