import { useForm } from "react-hook-form";
import {
  type UserType as UserType,
  userSchema,
} from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { KeyedMutator } from "swr";
import createUser from "../../hooks/api/createUser";
import { useState } from "react";
import styles from "./UserForm.module.css";

type UserFormProps = {
  mutate: KeyedMutator<UserType[]>;
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
  const [error, setError] = useState(false);

  const onSubmit = async (userData: UserType) => {
    try {
      setSubmitMessage("");
      setLoadingSubmit(true);
      setError(false);
      const newUser = await createUser(userData);
      mutate((userList) => [...(userList ?? []), newUser], false);
      setSubmitMessage("Cadastro realizado com sucesso!");
    } catch (error) {
      setSubmitMessage("Houve um erro ao cadastrar, tente novamente.");
      setError(true);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <div>Nome (obrigatório): </div>
        <input {...register("name")} />
        <div className={styles.messageError}>
          {errors.name?.message || "\u00A0"}
        </div>
      </div>

      <div className={styles.field}>
        <div>Email (obrigatório): </div>
        <input {...register("email")} />
        <div className={styles.messageError}>
          {errors.email?.message || "\u00A0"}
        </div>
      </div>

      <div className={styles.field}>
        <div>Telefone: </div>
        <input type="tel" {...register("phone")} />
      </div>

      <div className={styles.buttons}>
        <div className={error ? styles.messageError : styles.messageSuccess}>
          {submitMessage || "\u00A0"}
        </div>
        <button type="submit">
          {loadingSubmit && "Enviando..."}
          {!loadingSubmit && "Enviar"}
        </button>
      </div>
    </form>
  );
}

export default UserForm;
