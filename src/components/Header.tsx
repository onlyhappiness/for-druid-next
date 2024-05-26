import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  type: "default" | "home" | "search";
  className?: string;
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
}

const Header = ({
  type = "default",
  className,
  leftIcon,
  title,
  rightIcon,
}: HeaderProps) => {
  const navigate = useNavigate();

  const header = () => {
    if (type === "default") {
      return (
        <section
          className={cn("flex justify-between w-full px-5 py-3", className)}
        >
          {leftIcon ? leftIcon : <div />}
          {title ? <span>{title}</span> : null}
          {rightIcon ? rightIcon : <div />}
        </section>
      );
    }

    if (type === "home") {
      return (
        <section className="flex justify-between w-full px-5 py-3">
          <div>Logo</div>

          <SearchIcon
            onClick={() => {
              navigate(PATH.SEARCH);
            }}
            className="cursor-pointer"
          />
        </section>
      );
    }
  };

  return <header className="w-full bg-white">{header()}</header>;
};

export default Header;