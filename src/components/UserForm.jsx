import { useState } from "react";

function UserForm() {
  const [users, setUsers] = useState([]);

  async function handleAddUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");

    setUsers((prev) => [...prev, { name, email }]);
    console.log(users);
  }

  return (
    <div>
      <form action={handleAddUser}>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button type="submit">Enviar</button>
      </form>

      {users.map((user) => (
        <div>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
}

export default UserForm;
