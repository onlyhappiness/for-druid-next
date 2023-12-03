import api from ".";

// 유저 프로필 수정
export const putUserProfile = async () => {
  try {
    const res = await api.put(`/user/profile`);
    return res;
  } catch (error) {
    console.log("유저 프로필 수정 error: ", error);
    throw error;
  }
};
