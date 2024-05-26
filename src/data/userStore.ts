import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

interface State {
  userInfo: any;
}

interface Actions {
  setUserInfo: (data) => void;
  clearUserInfo: () => void;
}

interface Store extends State, Actions {}

export const useUserStore = create<Store>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: ({ userInfo }) => {
        set({ userInfo });
      },
      clearUserInfo: () => {
        set({ userInfo: null });
      },
    }),
    {
      name: "userInfo",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useUserInfoActions = () =>
  useUserStore(
    useShallow(({ setUserInfo, clearUserInfo }) => ({
      setUserInfo,
      clearUserInfo,
    }))
  );

export const useUserInfoState = () =>
  useUserStore(useShallow(({ userInfo }) => ({ userInfo })));
