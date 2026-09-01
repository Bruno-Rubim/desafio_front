import styles from "./Modal.module.css";

export type ModalProps = {
  closeFun: () => void;
  children: React.ReactNode;
};

function Modal({ closeFun, children }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={() => closeFun()}>X</button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
