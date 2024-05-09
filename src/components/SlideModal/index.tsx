import { useModalStore } from "@/store";

const SlideModal = () => {
  const { isOpen, setIsOpen, content } = useModalStore();
  return (
    <div className={`modal ${isOpen ? "show-modal" : ""}`}>
      {content}
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
};

export default SlideModal;
