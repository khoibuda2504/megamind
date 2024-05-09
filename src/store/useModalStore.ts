import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  content: null,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
  setContent: (content: React.ReactNode) => set({ content }),
}));

export default useModalStore;
