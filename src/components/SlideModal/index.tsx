import { useModalStore } from "@/store";
import { Modal } from "antd";

const SlideModal = () => {
  const { isModalOpen, content, setIsModalOpen } = useModalStore();
  return (
    <Modal
      open={isModalOpen}
      footer={null}
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        paddingBottom: 0,
      }}
      styles={{
        content: {
          height: "100vh",
        },
        body: {
          paddingTop: '30px'
        }
      }}
      width="80%"
      onCancel={() => setIsModalOpen(false)}
    >
      {content}
    </Modal>
  );
};

export default SlideModal;
