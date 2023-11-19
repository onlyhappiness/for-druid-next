import { notFound } from "next/navigation";
import PostPage from "./page.client";

const Post = async () => {
  try {
    return <PostPage />;
  } catch (e) {
    notFound();
  }
};

export default Post;
