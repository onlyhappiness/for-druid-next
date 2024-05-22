import { routes } from "@/constants";
import { useUserInfoState } from "@/data/userInfoStore";
import { permanentRedirect } from "next/navigation";

const useAuthGuard = () => {
  const { accessToken } = useUserInfoState();

  if (!accessToken) permanentRedirect(routes.AUTH_SIGNIN);
};

export { useAuthGuard };
