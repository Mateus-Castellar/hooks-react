import React from "react";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandler from "../components/HookUseImperativeHandler";
import HookCustom from "../components/HookCustom";

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
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandler />
      <HookCustom />
    </div>
  );
};

export default Home;
