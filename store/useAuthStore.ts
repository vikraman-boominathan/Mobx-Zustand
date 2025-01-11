import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  isAuthenticated: boolean;
  setAuth: (status: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setAuth: (status) => set({ isAuthenticated: status }),
  logout: async () => {
    await AsyncStorage.removeItem("token");
    set({ isAuthenticated: false });
  },
}));
