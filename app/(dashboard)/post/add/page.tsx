import { notFound } from "next/navigation";
import AddPostPage from "./page.client";

const AddPost = async () => {
  try {
    return <AddPostPage />;
  } catch (e) {
    notFound();
  }
};

export default AddPost;
