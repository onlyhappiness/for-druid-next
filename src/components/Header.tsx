import { SIZE } from "@/constants/number";
import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "./animated/AnimatedText";
import Logo from "/logo.png";

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
          className={cn("flex justify-between w-full px-3 py-3", className)}
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
        <section className="flex justify-between items-center w-full px-5 py-3">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-11 h-11" />
            <span className="flex gap-1 text-[#4C5946] font-semibold">
              {/* 드루이드 다이어리 */}
              <AnimatedText text={`드루이드`} />
              <AnimatedText text={`다이어리`} />
            </span>
          </div>

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
