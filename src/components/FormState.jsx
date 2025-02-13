import { useActionState } from "react";
// ReactDOM.useFormState has been renamed to React.useActionState.
// Please update FormState to use React.useActionState.

function FormState() {
  function userValidate(prevState, formData) {
    const name = formData.get("userName");

    if (name === "Hudson") {
      console.log(name);
      return { success: true, text: "Bem-vindo, Hudson!" };
    } else {
      return { success: false, text: "Usuário não encontrado." };
    }
  }

  const [message, formAction, isPending] = useActionState(userValidate, null);
  console.log(isPending);

  return (
    <form action={formAction}>
      <label htmlFor="userName">Nome</label>
      <input type="text" name="userName" />
      <button type="submit">Enviar</button>
      {message && <h4>Mensagem: {message.text}</h4>}
    </form>
  );
}

export default FormState;
