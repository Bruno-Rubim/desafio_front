import { useState, type ReactNode } from "react";
import type { ModalProps } from "../Modal/Modal";

type ModalButtonProps = {
  text: string;
  modal: React.ComponentType<ModalProps>;
  children: ReactNode;
};

function ModalButton({ text, modal: Modal, children }: ModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{text}</button>
      {isOpen && <Modal closeFun={() => setIsOpen(false)}>{children}</Modal>}
    </>
  );
}

export default ModalButton;
