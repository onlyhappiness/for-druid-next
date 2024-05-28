import { v4 as uuid } from "uuid";
import supabase from "../supabase";

// 다이어리 이미지 업로드
const postUploadImage = async (file: File) => {
  try {
    const newFileName = uuid();
    const { data, error } = await supabase.storage
      .from("image")
      .upload(`diary/${newFileName}`, file);

    if (error) {
      throw new Error(error.message);
    }

    // console.log("이미지 업로드 성공:: ", data);

    const { data: imageUrl } = supabase.storage
      .from("image")
      .getPublicUrl(data.path);
    console.log("이미지 url::: ", imageUrl);
    return imageUrl;
  } catch (error) {
    console.log("이미지 업로드 error::: ", error);
  }
};

export { postUploadImage };
