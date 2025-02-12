import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

export default SubmitButton;
