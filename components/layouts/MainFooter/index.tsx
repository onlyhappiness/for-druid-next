import { cn } from "@/lib/utils";
import { Home, Plus, Heart, Search, UserCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const items = [
  {
    key: "home",
    icon: <Home />,
    text: "Home",
    href: "/",
  },
  {
    key: "search",
    icon: <Search />,
    text: "검색",
    // href: "/",
  },
  {
    key: "plus",
    icon: <Plus size={"30"} />,
    text: "",
    // href: "/",
  },
  {
    key: "heart",
    icon: <Heart />,
    text: "찜한 글",
    href: "/favorite",
  },
  {
    key: "mypage",
    icon: <UserCircle />,
    text: "프로필",
    href: "/mypage",
  },
];

export default () => {
  const router = useRouter();
  const pathname = usePathname();

  const iconStyle = `flex flex-col justify-center items-center space-y-2 cursor-pointer hover:text-[#AEDB81]`;

  return (
    <footer className="flex justify-between items-center px-8 py-3">
      {items.map((item) => (
        <div
          key={item.key}
          className={`${iconStyle} px-3
            ${pathname === item.href ? `text-[#3AB795]` : `text-[#707070]`} `}
          onClick={() => {
            router.push(`${item.href}`);
          }}
        >
          <div>{item.icon}</div>
          <span className="text-sm">{item.text}</span>
        </div>
      ))}
    </footer>
  );
};
