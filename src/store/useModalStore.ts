import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  setContent: (content: React.ReactNode) => set({ content }),
}));

export default useModalStore;
