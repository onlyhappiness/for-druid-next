import { useUserInfoActions } from "@/data/userStore";
import { postLogout } from "@/services/apis/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";

const usePostLogout = () => {
  const queryClient = useQueryClient();
  const { clearUserInfo } = useUserInfoActions();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: (res) => {
      console.log("res: ", res);
      queryClient.invalidateQueries({ queryKey: [queryKeys.AUTH] });
      clearUserInfo();
    },
    onError: (error) => {
      console.log("error::: ", error);
    },
  });
};

export default usePostLogout;
