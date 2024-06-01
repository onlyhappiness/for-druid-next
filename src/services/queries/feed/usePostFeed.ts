import { postFeed } from "@/services/apis/feed";
import { useMutation } from "@tanstack/react-query";

const usePostFeed = () => {
  return useMutation({
    mutationFn: postFeed,
    onSuccess: (res) => {
      console.log("res: ", res);
    },
    onError: (error) => {
      console.log("error::: ", error);
    },
  });
};

export default usePostFeed;
