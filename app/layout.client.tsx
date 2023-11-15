"use client";

import MainFooter from "@/components/layouts/MainFooter";
import Navbar from "@/components/layouts/MainNav";
import SidebarNav from "@/components/layouts/sidebar";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-[#FAF8FF]">
      <div className="flex flex-col max-w-[520px] min-h-screen mx-auto bg-[#FFFFFF]">
        <Navbar />

        <main className="flex-grow container ">{children}</main>

        <MainFooter />
      </div>
    </div>
  );
}

export default ClientLayout;
