import supabase from "../supabase";

// 모든 feed 가져오기
const getFeedList = async () => {
  const { data } = await supabase
    .from("feed")
    .select(`id, created_at, content, image_url, users( email )`);

  return data;
};

export { getFeedList };
