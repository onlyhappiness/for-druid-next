import { SearchIcon } from "lucide-react";

interface HeaderProps {
  type: "DEFAULT" | "HOME";
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
}

const Header = ({
  type = "DEFAULT",
  leftIcon,
  title,
  rightIcon,
}: HeaderProps) => {
  const header = () => {
    if (type === "DEFAULT") {
      return (
        <section className="flex justify-between w-full px-5 py-3">
          {leftIcon ? leftIcon : <div />}
          <span>{title}</span>
          {rightIcon ? rightIcon : <div />}
        </section>
      );
    }

    if (type === "HOME") {
      return (
        <section className="flex justify-between w-full px-5 py-3">
          <div>Logo</div>

          <SearchIcon
            onClick={() => {
              console.log("search");
            }}
            className="cursor-pointer"
          />
        </section>
      );
    }
  };

  return (
    <header className="w-full bg-white">
      {/* {leftIcon} */}
      {header()}
      {/* {rightIcon} */}
    </header>
  );
};

export default Header;
