import { notFound } from "next/navigation";
import MypagePage from "./page.client";

const MyPage = async () => {
  try {
    return <MypagePage />;
  } catch (e) {
    notFound();
  }
};

export default MyPage;
