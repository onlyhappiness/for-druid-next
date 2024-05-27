import { SIZE } from "@/constants/number";
import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  type: "default" | "home" | "search";
  className?: string;
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
  back?: boolean;
}

const Header = ({
  type = "default",
  className,
  leftIcon,
  title,
  rightIcon,
  back,
}: HeaderProps) => {
  const navigate = useNavigate();

  const backIcon = () => {
    return (
      <ChevronLeftIcon
        className="cursor-pointer"
        size={SIZE.large}
        onClick={() => {
          navigate(-1);
        }}
      />
    );
  };

  const header = () => {
    if (type === "default") {
      return (
        <section
          className={cn("flex justify-between w-full px-5 py-3", className)}
        >
          <div className="flex flex-1 justify-start">
            {leftIcon && leftIcon}
            {back && backIcon()}
          </div>
          <div className="flex flex-1 justify-center">
            {title ? (
              <span className="text-lg font-medium">{title}</span>
            ) : null}
          </div>
          <div className="flex flex-1 justify-end">
            {rightIcon ? rightIcon : <div className="" />}
          </div>
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
