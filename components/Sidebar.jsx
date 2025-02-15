"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full relative">
      <SidebarHeader />
      <SidebarFooter />
    </div>
  );
}
