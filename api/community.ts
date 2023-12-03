import { ICommunity } from "@/interfaces/community";
import api from ".";

// 커뮤니티 보기
export const getCommunity = async () => {
  try {
    const res = await api.get(`/community`);
    return res;
  } catch (error) {
    console.log("커뮤니티 보기 error: ", error);
    throw error;
  }
};

// 커뮤니티 생성
export const postCommunity = async (req: ICommunity) => {
  try {
    const res = await api.post(`/community`, req);
    return res;
  } catch (error) {
    console.log("커뮤니티 생성 error: ", error);
    throw error;
  }
};

// 커뮤니티 상세
export const getCommunityDetail = async (communityId: string) => {
  try {
    const res = await api.get(`/community/${communityId}`);
    return res;
  } catch (error) {
    console.log("커뮤니티 상세 error: ", error);
    throw error;
  }
};

// 커뮤니티 수정
export const putCommunity = async (communityId: string, req: ICommunity) => {
  try {
    const res = await api.put(`/community/${communityId}`, req);
    return res;
  } catch (error) {
    console.log("커뮤니티 수정 error: ", error);
    throw error;
  }
};

// 커뮤니티 삭제
export const deleteCommunity = async (communityId: string) => {
  try {
    const res = await api.delete(`/community/${communityId}`);
    return res;
  } catch (error) {
    console.log("커뮤니티 삭제 error: ", error);
    throw error;
  }
};
