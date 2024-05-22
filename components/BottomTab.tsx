"use client";

import { routes as ROUTES, size } from "@/constants";
import { useUserInfoState } from "@/data/userInfoStore";
import { cn } from "@/lib/func";
import {
  CircleUserRoundIcon,
  HeartIcon,
  HomeIcon,
  MessageCircleMoreIcon,
  PlusCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Bottom from "./ui/bottom";

const BottomTab = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const { accessToken } = useUserInfoState();

  const routes = useMemo(() => {
    return [
      {
        icon: <HomeIcon size={size.ICON} />,
        href: ROUTES.HOME,
        label: "홈",
        isActive: pathname === "/",
      },
      {
        icon: <MessageCircleMoreIcon />,
        href: ROUTES.CHAT,
        label: "채팅",
        isActive: pathname === "/chat",
      },
      {
        icon: <PlusCircleIcon size={size.ICON} />,
        href: ROUTES.ADD,
        label: "등록",
        isActive: pathname === "/add",
      },
      {
        icon: <HeartIcon />,
        href: ROUTES.FAVORITE,
        label: "위시",
        isActive: pathname === "/favorite",
      },
      {
        icon: <CircleUserRoundIcon size={size.ICON} />,
        href: ROUTES.MY,
        label: "마이",
        isActive: pathname === "/my",
      },
    ];
  }, [pathname]);

  const onClickTab = (route: any) => {
    console.log("route:: ", route);

    console.log("accessToken: ", accessToken);

    if (!accessToken) {
      return push(ROUTES.AUTH_SIGNIN);
    }

    push(route.href);
  };

  return (
    <Bottom className="w-full min-w-sm max-w-lg px-8 py-3 border-t-[1px] bg-white">
      <div className="flex justify-between items-center w-full">
        {routes.map((route) => {
          return (
            <Link key={route.href} href={route.href}>
              <button
                // onClick={() => onClickTab(route)}
                key={route.label}
                className={cn(
                  `flex flex-col items-center gap-2 hover:text-[#35d58d]`,
                  route.isActive && `text-[#35d48d]`
                )}
              >
                {route.icon}
                <span className={cn(`text-xs`)}>{route.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </Bottom>
  );
};

export default BottomTab;
