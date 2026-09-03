import { useForm } from "react-hook-form";
import {
  type UserListType,
  type UserType as UserType,
  userSchema,
} from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { KeyedMutator } from "swr";
import createUser from "../../hooks/api/createUser";
import { useState } from "react";

type UserFormProps = {
  mutate: KeyedMutator<UserListType>;
};

function UserForm({ mutate }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(userSchema),
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (userData: UserType) => {
    try {
      setLoadingSubmit(true);
      const newUser = await createUser(userData);
      mutate((userList) => [...(userList ?? []), newUser], false);
      setSubmitMessage("Cadastrado com sucesso");
    } catch (error) {
      setSubmitMessage("Houve um erro");
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <>
      <p>Cadastro de usuário</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome: </label>
        <input {...register("name")} />
        <p>
          {errors.name && errors.name.message}
          {!errors.name && "Nome válido!"}
        </p>

        <label>Email: </label>
        <input {...register("email")} />
        <p>
          {errors.email && errors.email.message}
          {!errors.email && "Email válido!"}
        </p>

        <label>Telefone: </label>
        <input type="tel" {...register("phone")} />

        <br />
        <br />

        <div>
          <button type="submit">
            {loadingSubmit && "Enviando..."}
            {!loadingSubmit && "Enviar"}
          </button>
          <div>{submitMessage}</div>
        </div>
      </form>
    </>
  );
}

export default UserForm;
