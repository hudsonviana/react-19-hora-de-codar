import "./App.css";
import ParentComponent from "./components/ParentComponent";
import PostsItems from "./components/PostItems";
import UserForm from "./components/UserForm";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import FormStatus from "./components/FormStatus";
import FormState from "./components/FormState";
import MessageApp from "./components/MessageApp";

function App() {
  return (
    <>
      <h3>1. Form Actions</h3>
      <UserForm />

      <h3>2. Meta tags</h3>
      <title>React 19</title>

      <h3>3. Ref como props</h3>
      <ParentComponent />

      <h3>4. use para carregamento de dados</h3>
      <PostsItems />

      <h3>5. Contextos</h3>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>

      <h3>6. useFormStatus para status de envio de um formulário</h3>
      <FormStatus />

      <h3>7. useActionState atualização baseada em resposta do usuário</h3>
      <FormState />

      <h3>8. useOptmistic serve para melhorar a respost para o usuário</h3>
      <MessageApp />
    </>
  );
}

export default App;
