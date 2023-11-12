"use client";

import SidebarNav from "@/components/layouts/sidebar";

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-5">
      <div>
        <SidebarNav />
      </div>

      <div className="col-span-3">{children}</div>

      <div></div>
    </div>
  );
}

export default ClientLayout;
