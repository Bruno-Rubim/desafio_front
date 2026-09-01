import type { UserType } from "../../schemas/userSchema";

async function createUser(user: UserType) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Cadastro de usuário falhou!");
  }

  return await response.json();
}

export default createUser;
