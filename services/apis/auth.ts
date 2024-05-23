import { createClient } from "@/lib/supabase/server";

const supabase = createClient();

interface ILogin {
  email: string;
  password: string;
}

// 로그인
export const postLogin = async ({ req }: { req: ILogin }) => {
  const { data } = await supabase.auth.signInWithPassword(req);

  return data;
};
