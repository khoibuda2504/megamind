import { useModalStore } from "@/store";
import { Drawer } from "antd";

const UIDrawer = () => {
  const { isModalOpen, content, closeModal } = useModalStore();
  return (
    <Drawer
      open={isModalOpen}
      width="80%"
      onClose={() => closeModal()}
    >
      {content}
    </Drawer>
  );
};

export default UIDrawer;
