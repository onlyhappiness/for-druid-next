import { getUser, postLogin } from "@/services/apis/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./keys";

const usePostLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: async (res) => {
      console.log("res::: ", res);
      const authQueries = [
        [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
        [queryKeys.AUTH, queryKeys.GET_USER_INFO],
      ];

      authQueries.forEach((key) =>
        queryClient.invalidateQueries({ queryKey: key })
      );

      // await queryClient.refetchQueries({ queryKey: [queryKeys.AUTH] });

      // useGetUser 호출하여 사용자 정보 가져오기
      await getUser();
    },
    onError: (error) => {
      console.log("error::: ", error);
    },
  });
};

export default usePostLogin;
