import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return <div>Pagina Sobre / usando api context do react:{contextValue}</div>;
};

export default About;
