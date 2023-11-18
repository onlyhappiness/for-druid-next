import { notFound } from "next/navigation";
import SearchPage from "./page.client";

const Search = async () => {
  try {
    return <SearchPage />;
  } catch (e) {
    notFound();
  }
};

export default Search;
