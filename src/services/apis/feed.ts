import supabase from "../supabase";

// 모든 feed 가져오기
const getFeedList = async () => {
  const { data } = await supabase
    .from("feed")
    .select(`id, created_at, content, image_url, users( email )`);

  return data;
};

// feed 생성
const postFeed = async (req) => {
  const { data, error } = await supabase.from("feed").insert(req).single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export { getFeedList, postFeed };
