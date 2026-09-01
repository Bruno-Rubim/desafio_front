import Modal from "../../components/Modal/Modal";
import ModalButton from "../../components/ModalButton/ModalButton";
import useUser from "../../hooks/api/useUser";

function Users() {
  const resp = useUser();

  return (
    <>
      <ModalButton
        text="Abrir Modal"
        modal={Modal}
        mutate={resp.mutate}
      ></ModalButton>
      {resp.data.map((x) => (
        <div key={Math.random()}>
          {x.name} | {x.email} | {x.phone}
        </div>
      ))}
    </>
  );
}

export default Users;
