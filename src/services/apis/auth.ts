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

export { getUser, getUserInfo, postLogin, postLogout };