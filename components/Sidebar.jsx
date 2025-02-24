"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col h-screen justify-between">
      <div className="">
        <SidebarHeader />
      </div>
      <div className="">
        <SidebarFooter />
      </div>
    </div>
  );
}
