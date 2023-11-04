import { login } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log("로그인: ", res);
    },
    onError: (err) => {
      console.log("로그인 err: ", err);
    },
  });

  return mutation;
};

export default useLoginMutation;
