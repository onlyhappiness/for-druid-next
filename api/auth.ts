import { ILogin, ISignup } from "@/interfaces/auth";
import api from ".";

// 회원가입
export const signup = async (req: ISignup) => {
  const res = await api.post(`/auth/register`, req);

  return res.data;
};

// 로그인
export const login = async (req: ILogin) => {
  const res = await api.post(`/auth/login`, req);

  return res.data;
};

// 로그인 유저 정보
export const loadMyInfo = async () => {
  const res = await api.get(`/auth/login`);

  return res;
};
