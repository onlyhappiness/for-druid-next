import { Home, Plus, Heart, Search, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const items = [
  {
    icon: <Home />,
    text: "Home",
    href: "/",
  },
  {
    icon: <Search />,
    text: "검색",
    href: "/",
  },
  {
    icon: <Plus size={"30"} />,
    text: "",
    href: "/",
  },
  {
    icon: <Heart />,
    text: "찜한 글",
    href: "/favorite",
  },
  {
    icon: <UserCircle />,
    text: "프로필",
    href: "/mypage",
  },
];

export default () => {
  const router = useRouter();

  const iconStyle = `flex flex-col space-y-2 justify-center items-center cursor-pointer`;

  return (
    <footer className="flex justify-between items-center bg-[#98DDCA] text-white px-8 py-4">
      {/* <div className={iconStyle}>
        <Home />
        <span className="text-sm">Home</span>
      </div>

      <div className={iconStyle}>
        <Search />
        <span className="text-sm">검색</span>
      </div>

      <div className={iconStyle}>
        <Plus />
      </div>
      <div className={iconStyle}>
        <Heart />
        <span className="text-sm">찜한 글</span>
      </div>
      <div className={iconStyle}>
        <UserCircle />
        <span className="text-sm">프로필</span>
      </div> */}
      {items.map((item) => {
        return (
          <div
            className={iconStyle}
            onClick={() => {
              router.push(`${item.href}`);
            }}
          >
            <div>{item.icon}</div>
            <span className="text-sm">{item.text}</span>
          </div>
        );
      })}
    </footer>
  );
};
