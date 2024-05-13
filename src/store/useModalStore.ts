import { create } from "zustand";

interface IModalState {
  isModalOpen: boolean;
  openModal: (content: React.ReactNode) => void;
  content: React.ReactNode;
  closeModal: () => void
}

const useModalStore = create<IModalState>((set) => ({
  isModalOpen: false,
  content: null,
  openModal: (content: React.ReactNode) => set({ isModalOpen: true, content }),
  closeModal: () => set({
    isModalOpen: false,
    content: null
  })
}));

export default useModalStore;
