import { postFavorite } from "@/api/favorite";
import { useMutation } from "@tanstack/react-query";

// 찜하기
const usePostFavorite = () => {
  const mutation = useMutation({
    mutationFn: postFavorite,
    onSuccess: (res) => {
      console.log("찜하기 성공", res);
    },
  });

  return mutation;
};

export default usePostFavorite;
