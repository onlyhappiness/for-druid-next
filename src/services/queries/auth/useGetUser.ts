import { useUserStore } from "@/data/userStore";
import { getUser, getUserInfo } from "@/services/apis/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { queryKeys } from "./keys";

const useGetUser = () => {
  const { setUserInfo, clearUserInfo } = useUserStore();

  const {
    isSuccess: isUserSuccess,
    data: userData,
    isError: isUserError,
  } = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
    queryFn: () => getUser(),
  });

  const {
    data: userInfo,
    isSuccess: isLoginSuccess,
    isError: isLoginError,
  } = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_USER_INFO],
    queryFn: () => getUserInfo(userData?.id),
    enabled: !!userData?.id, // userData.id가 존재할 때만 호출
  });

  // console.log("userInfo::: ", userInfo);

  useEffect(() => {
    if (isLoginSuccess) {
      setUserInfo({ userInfo });
    } else if (isLoginError || isUserError) {
      clearUserInfo();
    }
  }, [
    isLoginSuccess,
    isLoginError,
    isUserError,
    setUserInfo,
    clearUserInfo,
    userInfo,
  ]);

  return {
    userInfo,
  };
};

export default useGetUser;
