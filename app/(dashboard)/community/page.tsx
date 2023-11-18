import { notFound } from "next/navigation";
import CommunityPage from "./page.client";

const Community = async () => {
  try {
    return <CommunityPage />;
  } catch (e) {
    notFound();
  }
};

export default Community;
