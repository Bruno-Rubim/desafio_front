type ModalButtonProps = {
  text: string;
  openFunc: () => void;
};

function ModalButton({ text, openFunc }: ModalButtonProps) {
  return <button onClick={() => openFunc()}>{text}</button>;
}

export default ModalButton;
