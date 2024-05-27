import { Input } from "@/components/ui/input";
import { SIZE } from "@/constants/number";
import { ChevronLeftIcon, SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <section className="flex flex-col my-3 px-3 gap-10">
        <span className="font-semibold">최근 검색어</span>

        <span className="font-semibold">추천 검색어</span>
      </section>
    </div>
  );
};

/**
 * 검색 페이지에서 사용하는 header
 * @returns
 */
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="p-3">
      <section className="flex justify-between items-center gap-3">
        <ChevronLeftIcon
          className="cursor-pointer"
          size={SIZE.large}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Input placeholder="검색어" icon={<SearchIcon size={SIZE.large} />} />
      </section>
    </header>
  );
};

export default Search;
