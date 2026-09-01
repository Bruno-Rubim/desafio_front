import { useState } from "react";
import type { ModalProps } from "../Modal/Modal";
import UserForm from "../Form/UserForm";
import type { KeyedMutator } from "swr";
import type { UserType } from "../../schemas/userSchema";

type Props = {
  text: string;
  modal: React.ComponentType<ModalProps>;
  mutate: KeyedMutator<UserType[]>;
};

function ModalButton({ text, modal: Modal, mutate }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{text}</button>
      {isOpen && (
        <Modal closeFun={() => setIsOpen(false)}>
          <UserForm
            submitFunc={(newUser) => {
              console.log(newUser);
              mutate((userList) => [...(userList ?? []), newUser], false);
            }}
          ></UserForm>
        </Modal>
      )}
    </>
  );
}

export default ModalButton;
