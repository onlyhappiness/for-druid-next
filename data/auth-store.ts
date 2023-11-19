import { create } from "zustand";

type State = {
  token: string;
};

type Action = {
  setToken: (token: State["token"]) => void;
  clearToken: () => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  token: "",
  setToken: (token) => set(() => ({ token: token })),
  clearToken: () => set(() => ({ token: "" })),
}));
