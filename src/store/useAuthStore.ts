import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    }), 
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore