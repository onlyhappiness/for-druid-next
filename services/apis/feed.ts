import { createClient } from "@/lib/supabase/server";

const supabase = createClient();

// 모든 feed 보기
const getFeedList = async () => {
  // client
  //   const { data } = await supabaseClient.from("feed").select("*");
  //   console.log("data: ", data);
  //   return data;

  // ssr
  const { data } = await supabase
    .from("feed")
    .select(`id, created_at, content, image_url, users( email )`);

  // const { data } = await supabase.from("feed")
  //   .select(`id, created_at, content, users(
  //     email
  //   )`);

  return data;
};

export { getFeedList };
