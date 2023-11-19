"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import MainNav from "@/layout/main-nav";
import MainFooter from "@/layout/main-footer";

function ClientLayout({ children }: { children: React.ReactNode }) {
  // 만약 w360 이하면 보여지지 않기

  return (
    <div className="w-screen h-screen bg-[#FAF8FF]">
      <div className="flex flex-col max-w-[520px] min-h-screen mx-auto bg-[#FFFFFF]">
        <MainNav />

        <ScrollArea className="h-[calc(100vh-132px)] bg-[#F1F3F5]">
          <div className="p-3">{children}</div>
        </ScrollArea>

        <MainFooter />
      </div>
    </div>
  );
}

export default ClientLayout;
