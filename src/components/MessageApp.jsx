import { useState } from "react";
import FormMessage from "./FormMessage";

function MessageApp() {
  const [messages, setMessages] = useState([
    {
      text: "Oi, sou sua primeira mensagem!",
      sending: false,
      key: 1,
    },
  ]);

  async function deliveryMessage(message) {
    // Usando o hook
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Usando o dado final
    return message;
  }

  async function sendMessage(formData) {
    const sentMessage = await deliveryMessage(formData.get("message"));

    setMessages((messages) => [
      ...messages,
      { text: sentMessage, sending: false },
    ]);
  }

  return <FormMessage messages={messages} sendMessage={sendMessage} />;
}

export default MessageApp;
