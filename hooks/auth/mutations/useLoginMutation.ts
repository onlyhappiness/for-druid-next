import { login } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useLoginMutation = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log("res: ", res.data.access_token);

      sessionStorage.setItem("token", res.data.access_token);
      if (res.data.access_token) {
        router.push("/home");
      }
    },
    onError: (err) => {
      console.log("로그인 err: ", err);

      //   return <LoginErrorModal />;
    },
  });

  return mutation;
};

export default useLoginMutation;
