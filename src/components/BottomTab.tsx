import { PATH } from "@/constants/path";
import { cn } from "@/lib/utils";
import {
  CircleUserRoundIcon,
  HeartIcon,
  HomeIcon,
  MessageCircleIcon,
  PlusCircleIcon,
} from "lucide-react";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bottom from "./ui/bottom";

const BottomTab = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const routes = useMemo(() => {
    return [
      {
        icon: <HomeIcon />,
        href: PATH.HOME,
        label: "홈",
        isActive: pathname === PATH.HOME,
      },
      {
        icon: <MessageCircleIcon />,
        href: PATH.CHAT,
        label: "채팅",
        isActive: pathname === PATH.CHAT,
      },
      {
        icon: <PlusCircleIcon />,
        href: PATH.ADD,
        label: "등록",
        isActive: pathname === PATH.ADD,
      },
      {
        icon: <HeartIcon />,
        href: PATH.FAVORITE,
        label: "위시",
        isActive: pathname === PATH.FAVORITE,
      },
      {
        icon: <CircleUserRoundIcon />,
        href: PATH.MY,
        label: "마이",
        isActive: pathname === PATH.MY,
      },
    ];
  }, [pathname]);

  const onClickTab = (route) => {
    navigate(route.href);
  };

  return (
    <Bottom className="w-full min-w-sm max-w-lg px-8 py-3 border-t-[1px] bg-white">
      <div className="flex justify-between items-center w-full">
        {routes.map((route) => {
          return (
            <button
              key={route.label}
              className={cn(
                `flex flex-col items-center gap-2 hover:text-[#35d58d]`,
                route.isActive && `text-[#35d48d]`
              )}
              onClick={() => onClickTab(route)}
            >
              {route.icon}
              <span className={cn("text-xs")}>{route.label}</span>
            </button>
          );
        })}
      </div>
    </Bottom>
  );
};

export default BottomTab;
