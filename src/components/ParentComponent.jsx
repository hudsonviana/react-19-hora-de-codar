import { useRef, useEffect } from "react";
import InputField from "./InputField";

// A lógica abaixo permite que o componente receba o foco automaticamente ao carregar/recarregar a página
function ParentComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <InputField ref={inputRef} placeholder={"Digite algo aqui"} />
    </div>
  );
}

export default ParentComponent;
