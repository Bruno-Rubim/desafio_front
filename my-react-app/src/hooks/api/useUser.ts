import useSWR from "swr";
import { fetcher } from "../../services/fetcher";
import { userListSchema, type UserType } from "../../schemas/userSchema";
import z from "zod";
import { STORAGE_KEYS } from "../../constants/localStorage";

/**
 * Busca a lista de usuários com SWR da URL configurada no local storage verificando os dados com o schema
 * @returns
 */
function useUser() {
  const { data, error, isLoading, mutate } = useSWR<UserType[]>(
    localStorage.getItem(STORAGE_KEYS.USER_REQUEST_URL) ??
      "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  let parsedData: UserType[] = [];

  if (data) {
    try {
      parsedData = userListSchema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Lista de dados não condizem com o schema");
      }
    }
  }

  return { data: parsedData, error, isLoading, mutate };
}

export default useUser;
