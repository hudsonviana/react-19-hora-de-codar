import "./App.css";
import ParentComponent from "./components/ParentComponent";
import UserForm from "./components/UserForm";

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

    </>
  );
}

export default App;
