import { useState } from "react";
import UserForm from "../../components/Form/UserForm";
import Modal from "../../components/Modal/Modal";
import ModalButton from "../../components/ModalButton/ModalButton";
import useUser from "../../hooks/api/useUser";
import UserList from "../../components/UserList/UserList";
import RequestSettings from "../../components/RequestSettings/RequestSettings";
import styles from "./Users.module.css";

function Users() {
  const resp = useUser();
  const [userModalState, setUserModalState] = useState(false);
  const [configModalState, setConfigModalState] = useState(false);
  function closeModals() {
    setUserModalState(false);
    setConfigModalState(false);
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>Lista de usuários cadastrados</div>
        <div>{<UserList resp={resp}></UserList>}</div>

        <div className={styles.footer}>
          <ModalButton
            text="Cadastrar Usuário"
            openFunc={() => {
              closeModals();
              setUserModalState(true);
            }}
          ></ModalButton>

          <ModalButton
            text="Configurar Request"
            openFunc={() => {
              closeModals();
              setConfigModalState(true);
            }}
          ></ModalButton>
        </div>
      </div>
      {userModalState && (
        <Modal closeFun={closeModals} name="Cadastro de Usuário">
          <UserForm mutate={resp.mutate}></UserForm>
        </Modal>
      )}
      {configModalState && (
        <Modal closeFun={closeModals} name="Alterar Resposta do Request">
          <RequestSettings />
        </Modal>
      )}
    </>
  );
}

export default Users;
