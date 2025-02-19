"use client";

import NavbarMenu from "./NavbarMenu";
import BoardNavbar from "./BoardNavbar";
import BoardCardLists from "./BoardCardLists";

export default function Menubar() {
  return (
    <div className="flex flex-col">
      <NavbarMenu />

      <div className="bg-slate-50 h-[720px] border-1 overflow-hidden mt-2 rounded-3xl">
        <BoardNavbar />

        <BoardCardLists />
      </div>
    </div>
  );
}
