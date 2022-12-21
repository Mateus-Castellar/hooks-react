import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandler = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>UseImperativeHandler</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>
        validar input
      </button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandler;
