import styles from "./Modal.module.css";

export type ModalProps = {
  closeFun: () => void;
  children: React.ReactNode;
  name: string;
};

function Modal({ closeFun, children, name }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>{name}</div>
          <button className={styles.button} onClick={() => closeFun()}>
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
