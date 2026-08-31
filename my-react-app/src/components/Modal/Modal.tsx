import styles from "./Modal.module.css";

export type ModalProps = {
  closeFun: () => void;
};

function Modal({ closeFun }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={() => closeFun()}>X</button>
        Modal Funcionando dahora aqui
      </div>
    </div>
  );
}

export default Modal;
