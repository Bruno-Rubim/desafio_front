import { useState } from "react";
import UserForm from "../../components/Form/UserForm";
import Modal from "../../components/Modal/Modal";
import ModalButton from "../../components/ModalButton/ModalButton";
import useUser from "../../hooks/api/useUser";

function Users() {
  const resp = useUser();
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <ModalButton
        text="Abrir Modal"
        openFunc={() => {
          setModalState(true);
        }}
      ></ModalButton>
      {modalState && (
        <Modal closeFun={() => setModalState(false)}>
          <UserForm mutate={resp.mutate}></UserForm>
        </Modal>
      )}
      {resp.data.map((x) => (
        <div key={Math.random()}>
          {x.name} | {x.email} | {x.phone}
        </div>
      ))}
    </>
  );
}

export default Users;
