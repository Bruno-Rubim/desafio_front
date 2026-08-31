import { useState } from "react";
import type { ModalProps } from "../Modal/Modal";

type Props = {
  text: string;
  modal: React.ComponentType<ModalProps>;
};

function ModalButton({ text, modal: Modal }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{text}</button>
      {isOpen && <Modal closeFun={() => setIsOpen(false)}></Modal>}
    </>
  );
}

export default ModalButton;
