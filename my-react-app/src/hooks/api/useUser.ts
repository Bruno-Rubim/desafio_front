import useSWR from "swr";
import { fetcher } from "../../services/fetcher";
import {
  userListSchema,
  type UserListType,
  type UserType,
} from "../../schemas/userSchema";
import z from "zod";

function useUser() {
  const { data, error, isLoading, mutate } = useSWR<UserType[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  let parsedData: UserListType = [];

  if (data) {
    try {
      parsedData = userListSchema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Data list does not match schema");
      }
    }
  }

  return { data: parsedData, error, isLoading, mutate };
}

export default useUser;
