import { Input } from "@/components/ui/input";
import { size } from "@/constants";
import { ChevronLeftIcon } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <ChevronLeftIcon size={size.ICON} />

      <Input className="outline-0" placeholder="" />
    </div>
  );
};

export default Header;
