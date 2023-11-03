// import { signUp } from "@/api/auth";
import api from "@/api";
import { ISignup } from "@/interfaces/auth";
import { useMutation } from "@tanstack/react-query";

export const signUp = async (req: ISignup) => {
  const res = await api.post(`/auth/register`, req);

  return res.data;
};

const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (res) => {
      console.log("회원가입: ", res);
    },
    onError: (err) => {
      console.log("회원가입 err: ", err);
    },
  });

  return mutation;
};

export default useSignUp;
