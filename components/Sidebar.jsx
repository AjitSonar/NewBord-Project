"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <div className=" hidden lg:block w-[304px] h-[1025px] flex-col relative">
      <SidebarHeader />
      <SidebarFooter />
    </div>
  );
}
