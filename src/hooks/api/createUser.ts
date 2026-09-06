import { STORAGE_KEYS } from "../../constants/localStorage";
import type { UserType } from "../../schemas/userSchema";

/**
 * Faz uma requisição POST inserindo os dados do usuário usando a URL configurada no local storage
 * @param user Dados do usuário a ser inserido
 * @returns
 */
async function createUser(user: UserType) {
  const url = localStorage.getItem(STORAGE_KEYS.USER_REQUEST_URL) ?? "";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    console.error("Erro no cadastro de usuário.");
    throw new Error("Cadastro de usuário falhou!");
  }

  return await response.json();
}

export default createUser;
