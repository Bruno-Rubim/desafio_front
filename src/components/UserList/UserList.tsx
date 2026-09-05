import type { UserType } from "../../schemas/userSchema";
import styles from "./UserList.module.css";

type UserListProps = {
  resp: {
    data: UserType[];
    error: string | null;
    isLoading: boolean;
  };
};

function UserList({ resp }: UserListProps) {
  return (
    <>
      {resp.data.length > 0 && (
        <div className={styles.table}>
          <div className={styles.rowHeader}>
            <div className={styles.block}>Nome</div>
            <div className={styles.block}>Email</div>
            <div className={styles.block}>Telefone</div>
          </div>
          {resp.data.map((u) => (
            <div className={styles.row} key={Math.random()}>
              <div className={styles.block}>{u.name}</div>
              <div className={styles.block}>{u.email}</div>
              <div className={styles.blockRight}>{u.phone}</div>
            </div>
          ))}
        </div>
      )}

      {resp.isLoading && <div className={styles.message}>Carregando...</div>}

      {!resp.isLoading && resp.data.length == 0 && resp.error != null && (
        <div className={styles.errorMessage}>
          Houve um erro ao buscar a lista de usuários, por favor tente
          novamente.
        </div>
      )}

      {!resp.isLoading && resp.data.length == 0 && resp.error == null && (
        <div className={styles.message}>Não há usuários cadastrados.</div>
      )}
    </>
  );
}

export default UserList;
