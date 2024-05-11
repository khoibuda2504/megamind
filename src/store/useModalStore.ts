import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  content: React.ReactNode;
  closeModal: () => void
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  content: null,
  openModal: (content: React.ReactNode) => set({ isModalOpen: true, content }),
  closeModal: () => set({
    isModalOpen: false,
    content: null
  })
}));

export default useModalStore;
