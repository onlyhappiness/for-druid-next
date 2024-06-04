import { postCommunity } from "@/services/apis/community";
import { useMutation } from "@tanstack/react-query";

const usePostCommunity = () => {
  return useMutation({
    mutationFn: postCommunity,
    onSuccess: (res) => {
      console.log("res: ", res);
    },
    onError: (error) => {
      console.log("error::: ", error);
    },
  });
};

export default usePostCommunity;
