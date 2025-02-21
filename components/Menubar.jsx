"use client";

import NavbarMenu from "./NavbarMenu";
import BoardNavbar from "./BoardNavbar";
import BoardCardLists from "./BoardCardLists";

export default function Menubar() {
  return (
    <div className="flex flex-col justify-center">
      <NavbarMenu />

      <div className="bg-slate-50 h-[880px] justify-center border-1 lg:overflow-hidden overflow-y-auto  mt-2 rounded-3xl">
        <BoardNavbar />

        <BoardCardLists />
      </div>
    </div>
  );
}
