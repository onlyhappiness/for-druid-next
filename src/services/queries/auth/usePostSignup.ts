import { postSignup } from "@/services/apis/auth";
import { useMutation } from "@tanstack/react-query";

const usePostSignup = () => {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: (res) => {
      console.log("회원가입 성공", res);
    },
    onError: (error) => {
      console.log("회원가입 실패", error);
    },
  });
};

export default usePostSignup;
