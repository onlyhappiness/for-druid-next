import supabase from "../supabase";

// 모든 커뮤니티 가져오기
const getCommunityList = async () => {
  const { data } = await supabase
    .from("community")
    .select(
      `id, created_at, content, image_url, users( email, username, avatar_url )`,
    );

  return data;
};

// 커뮤니티 생성
const postCommunity = async (req) => {
  const { data, error } = await supabase.from("community").insert(req).single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export { getCommunityList, postCommunity };
