import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthState {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create(
  persist<IAuthState>(
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