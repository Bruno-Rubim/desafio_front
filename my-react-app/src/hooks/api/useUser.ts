import useSWR from "swr";
import { fetcher } from "../../services/api";
import { usersSchema, type UserListData } from "../../schemas/userSchema";
import z from "zod";

function useUser() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  let parsedData: UserListData = [];

  if (data) {
    try {
      parsedData = usersSchema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Data list does not match schema");
      }
    }
  }

  return { data: parsedData, error, isLoading };
}

export default useUser;
