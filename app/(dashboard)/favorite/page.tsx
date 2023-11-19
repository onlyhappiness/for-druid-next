import { notFound } from "next/navigation";
import FavoritePage from "./page.client";
import useMyInfoQuery from "@/hooks/auth/queries/useMyInfo";

const Favorite = async () => {
  try {
    return <FavoritePage />;
  } catch (e) {
    notFound();
  }
};

export default Favorite;
