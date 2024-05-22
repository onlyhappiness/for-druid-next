"use client";

import { Input } from "@/components/ui/input";
import { ChevronLeft, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { back } = useRouter();

  return (
    <div className="flex items-center gap-2">
      <ChevronLeft size={28} onClick={back} />

      <Input placeholder="" icon={<SearchIcon />} />
    </div>
  );
};

export default Header;
