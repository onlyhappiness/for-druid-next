import { PATH } from "@/constants/path";
import { useUserInfoState } from "@/data/userStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthGuard = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfoState();

  console.log("저장된 유저 info::: ", userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate(PATH.AUTH.SIGNIN, { replace: true });
    }

    // 유저 이름을 설정하지 안한 경우
    // if (!userInfo.username) {
    //   navigate(PATH.FAVORITE, { replace: true });
    // }
  }, [userInfo]);
};

export default useAuthGuard;
