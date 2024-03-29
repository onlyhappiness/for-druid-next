import { signup } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useSignUpMutation = () => {
  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      console.log("회원가입: ", res);
    },
    onError: (err) => {
      console.log("회원가입 err: ", err);
    },
  });

  return mutation;
};

export default useSignUpMutation;
