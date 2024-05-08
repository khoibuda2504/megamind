import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useAuthStore