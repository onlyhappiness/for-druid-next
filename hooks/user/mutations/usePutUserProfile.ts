import { putUserProfile } from "@/api/user";
import { useMutation } from "@tanstack/react-query";

// 유저 프로필 수정
const usePutUserProfile = () => {
  const mutation = useMutation({
    mutationFn: putUserProfile,
    onSuccess: (res) => {
      console.log("유저 프로필 변경 성공", res);
    },
  });

  return mutation;
};

export default usePutUserProfile;
