import supabase from "../supabase";

// 모든 갤러리 가져오기
const getGalleryList = async () => {
  const { data, error } = await supabase
    .from("gallery")
    .select(
      `id , created_at, content, image_url , users( email, username, avatar_url )`,
    );

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// 갤러리 생성

export { getGalleryList };
