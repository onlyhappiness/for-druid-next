"use client";

import MainFooter from "@/components/layouts/MainFooter";
import Navbar from "@/components/layouts/MainNav";
import { ScrollArea } from "@/components/ui/scroll-area";

function ClientLayout({ children }: { children: React.ReactNode }) {
  // 만약 w360 이하면 보여지지 않기

  return (
    <div className="w-screen h-screen bg-[#FAF8FF]">
      <div className="flex flex-col max-w-[520px] min-h-screen mx-auto bg-[#FFFFFF]">
        <Navbar />

        <ScrollArea className="h-[calc(100vh-132px)] shadow-md">
          <div className="px-6 py-3">{children}</div>
        </ScrollArea>

        <MainFooter />
      </div>
    </div>
  );
}

export default ClientLayout;
