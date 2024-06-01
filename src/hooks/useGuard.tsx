import { PATH } from "@/constants/path";
import { useUserInfoState } from "@/data/userStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// auth Guard
const useAuthGuard = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserInfoState();

  // console.log("저장된 유저 info::: ", userInfo);

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

const useStepGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;

  useEffect(() => {
    if (!email) {
      console.log("이메일이 없어요");
      navigate(PATH.HOME, { replace: true }); // replace를 사용하여 뒤로가기를 막음
    }
  }, [location, navigate]);
};

export { useAuthGuard, useStepGuard };
