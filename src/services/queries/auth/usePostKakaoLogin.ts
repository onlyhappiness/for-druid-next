import { PATH } from "@/constants/path";
import { postKakaoLogin } from "@/services/apis/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const usePostKakaoLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postKakaoLogin,
    onSuccess: async (res) => {
      console.log("카카오 로그인 성공", res);
      navigate(PATH.HOME, { replace: true }); // replace를 사용하여 뒤로가기를 막음
    },
    onError: (error) => {
      console.log("카카오 로그인 실패", error);
    },
  });
};

export default usePostKakaoLogin;
