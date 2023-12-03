import { IFavorite } from "@/interfaces/favorite";
import api from ".";

// 찜한 커뮤니티 보기
export const getFavorite = async () => {
  try {
    const res = await api.get(`/favorite`);
    return res;
  } catch (error) {
    console.log("찜한 커뮤니티 보기 error: ", error);
    throw error;
  }
};

// 찜하기
export const postFavorite = async (req: IFavorite) => {
  try {
    const res = await api.post(`/favorite`, req);
    return res;
  } catch (error) {
    console.log("찜하기 error: ", error);
    throw error;
  }
};

// 찜한 커뮤니티 삭제
export const deleteFavorite = async (favoriteId: string) => {
  try {
    const res = await api.delete(`/favorite/${favoriteId}`);
    return res;
  } catch (error) {
    console.log("찜한 커뮤니티 삭제 error: ", error);
    throw error;
  }
};
