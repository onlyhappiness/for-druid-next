import { notFound } from "next/navigation";
import ForumPage from "./page.client";

const Forum = async () => {
  try {
    return <ForumPage />;
  } catch (e) {
    notFound();
  }
};

export default Forum;
