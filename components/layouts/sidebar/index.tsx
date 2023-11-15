import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const sidebarItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Forum",
    href: "/forum",
  },
  {
    title: "Diary",
    href: "/diary",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Event",
    href: "/event",
  },
];

export default ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <aside className={cn("top-0 h-screen p-2")} {...props}>
      <div className="flex items-center mb-4 space-x-1 p-2">
        <h1 className="text-lg font-medium">Logo</h1>
      </div>

      <ScrollArea className="h-screen">
        <div className="space-y-2">
          {sidebarItems.map((item, index) => {
            return (
              <Button
                key={`sidebar-button-${item.title}`}
                className="w-full justify-start font-normal"
                variant={pathname === item.href ? "default" : "ghost"}
                onClick={() => {
                  router.push(`${item.href}`);
                }}
              >
                {item.title}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </aside>
  );
};
