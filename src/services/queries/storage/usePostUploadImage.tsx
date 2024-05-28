import { postUploadImage } from "@/services/apis/storage";
import { useMutation } from "@tanstack/react-query";

const usePostUploadImage = () => {
  return useMutation({
    mutationFn: postUploadImage,
    onSuccess: (res) => {
      console.log("이미지 업로드 성공", res);
    },
    onError: (error) => {
      console.log("이미지 업로드 실패", error);
    },
  });
};

export default usePostUploadImage;
