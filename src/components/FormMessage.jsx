import { useOptimistic } from "react";

function FormMessage({ messages, sendMessage }) {
  const [optmisticMessages, addOptmisticMessages] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );

  async function formAction(formData) {
    console.log(formData);
    addOptmisticMessages(formData.get("message"));

    await sendMessage(formData);
  }

  return (
    <>
      {optmisticMessages.map((message, index) => (
        <div key={index}>
          {message.text} {message.sending && <small>(Enviando...)</small>}
        </div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" placeholder="digite algo" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default FormMessage;
