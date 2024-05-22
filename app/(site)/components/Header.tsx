"use client";

import Top from "@/components/ui/top";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { push } = useRouter();

  const onClickSearch = () => {
    push("/search");
  };

  return (
    <Top className="w-full bg-white">
      {/* <AppLink /> */}

      <section className="flex justify-between w-full px-5 py-3">
        <div>Logo</div>

        <SearchIcon onClick={onClickSearch} className="cursor-pointer" />
      </section>
    </Top>
  );
};

export default Header;
