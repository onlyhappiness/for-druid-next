import { notFound } from "next/navigation";
import DiaryPage from "./page.client";

const Diary = async () => {
  try {
    return <DiaryPage />;
  } catch (e) {
    notFound();
  }
};

export default Diary;
