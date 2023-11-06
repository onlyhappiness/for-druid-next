import { login } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      sessionStorage.setItem("token", res.data.access_token);
    },
    onError: (err) => {
      console.log("로그인 err: ", err);

      //   return <LoginErrorModal />;
    },
  });

  return mutation;
};

export default useLoginMutation;
