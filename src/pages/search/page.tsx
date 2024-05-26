import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { SIZE } from "@/constants/number";
import { ChevronLeftIcon, SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header
        type="default"
        className="items-center gap-3"
        leftIcon={
          <ChevronLeftIcon
            className="cursor-pointer"
            size={SIZE.large}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        rightIcon={
          <Input placeholder="검색어" icon={<SearchIcon size={SIZE.large} />} />
        }
      />
    </div>
  );
};

export default Search;
