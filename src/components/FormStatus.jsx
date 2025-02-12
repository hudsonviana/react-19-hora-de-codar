import SubmitButton from "./SubmitButton";

function FormStatus() {
  async function formAction(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Email recebido: " + formData.get("email"));
  }

  return (
    <form action={formAction}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite um e-mail"
      />

      <SubmitButton />
    </form>
  );
}

export default FormStatus;
