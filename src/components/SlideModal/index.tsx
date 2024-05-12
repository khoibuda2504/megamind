import { useModalStore } from "@/store";
import { Drawer } from "antd";

const SlideModal = () => {
  const { isModalOpen, content, closeModal } = useModalStore();
  return (
    <Drawer
      open={isModalOpen}
      width="80%"
      // footer={null}
      // style={{
      //   position: "absolute",
      //   right: 0,
      //   top: 0,
      //   paddingBottom: 0,
      // }}
      // styles={{
      //   content: {
      //     height: "100vh",
      //   },
      //   body: {
      //     paddingTop: "30px",
      //   },
      // }}
      // width="80%"
      onClose={() => closeModal()}
    >
      {content}
    </Drawer>
  );
};

export default SlideModal;
