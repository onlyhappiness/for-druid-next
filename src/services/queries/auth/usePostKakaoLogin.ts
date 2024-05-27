import { postKakaoLogin } from "@/services/apis/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostKakaoLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postKakaoLogin,
    onSuccess: async (res) => {
      console.log("카카오 로그인 성공", res);
    },
    onError: (error) => {
      console.log("카카오 로그인 실패", error);
    },
  });
};

export default usePostKakaoLogin;
