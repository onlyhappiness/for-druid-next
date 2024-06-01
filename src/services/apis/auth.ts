import { ISignin } from "@/types/auth";
import supabase from "../supabase";

// log in with email/password
const postLogin = async (req: ISignin) => {
  const { data, error } = await supabase.auth.signInWithPassword(req);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

//
const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

// 유저 정보 불러오기
const getUserInfo = async (userId) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// 로그아웃
const postLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

// 카카오 로그인
const postKakaoLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) {
    throw new Error(error.message);
  }
};

// 이메일 회원가입
const postSignup = async (req) => {
  const { data, error } = await supabase.auth.signUp(req);

  if (error) {
    throw new Error(error.message);
  }
};

export {
  getUser,
  getUserInfo,
  postKakaoLogin,
  postLogin,
  postLogout,
  postSignup,
};
