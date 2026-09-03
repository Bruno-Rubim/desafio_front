import { useState } from "react";
import UserForm from "../../components/Form/UserForm";
import Modal from "../../components/Modal/Modal";
import ModalButton from "../../components/ModalButton/ModalButton";
import useUser from "../../hooks/api/useUser";
import UserList from "../../components/UserList/UserList";
import RequestSettings from "../../components/RequestSettings/RequestSettings";

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
      <ModalButton
        text="Cadastrar Usuário"
        openFunc={() => {
          closeModals();
          setUserModalState(true);
        }}
      ></ModalButton>
      {userModalState && (
        <Modal closeFun={closeModals}>
          <UserForm mutate={resp.mutate}></UserForm>
        </Modal>
      )}
      <UserList list={resp.data} error={resp.error}></UserList>
      <ModalButton
        text="Configurar Request"
        openFunc={() => {
          closeModals();
          setConfigModalState(true);
        }}
      ></ModalButton>
      {configModalState && (
        <Modal closeFun={closeModals}>
          <RequestSettings />
        </Modal>
      )}
    </>
  );
}

export default Users;
