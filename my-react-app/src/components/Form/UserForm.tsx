import { useForm } from "react-hook-form";
import {
  type UserListType,
  type UserType as UserType,
  userSchema,
} from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { KeyedMutator } from "swr";

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

  const onSubmit = async (newUser: UserType) => {
    mutate((userList) => [...(userList ?? []), newUser], false);
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
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}

export default UserForm;
