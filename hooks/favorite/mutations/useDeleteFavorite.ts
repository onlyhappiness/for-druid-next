import { deleteFavorite } from "@/api/favorite";
import { useMutation } from "@tanstack/react-query";

// 찜한 커뮤니티 삭제
const useDeleteFavorite = () => {
  const mutation = useMutation({
    mutationFn: deleteFavorite,
    onSuccess: (res) => {
      console.log("찜한 커뮤니티 삭제 성공", res);
    },
  });

  return mutation;
};

export default useDeleteFavorite;
