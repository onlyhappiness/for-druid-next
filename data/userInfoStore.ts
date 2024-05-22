import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

interface State {
  accessToken: string | null;
}

/**
 * @description 세션스토리지에 토큰 저장
 */
interface Actions {
  setUserInfo: (data: State) => void;
  clearUserInfo: () => void;
}

interface Store extends State, Actions {}

export const useUserInfoStore = create<Store>()(
  persist(
    (set) => ({
      accessToken: null,
      setUserInfo: (data) => set(data),
      clearUserInfo: () => set({ accessToken: "" }),
    }),
    {
      name: "userInfo",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useUserInfoActions = () =>
  useUserInfoStore(
    useShallow(({ setUserInfo, clearUserInfo }) => ({
      setUserInfo,
      clearUserInfo,
    }))
  );

export const useUserInfoState = () =>
  useUserInfoStore(useShallow(({ accessToken }) => ({ accessToken })));
