"use client";

import NavbarMenu from "./NavbarMenu";
import BoardNavbar from "./BoardNavbar";
import BoardCardLists from "./BoardCardLists";

export default function Menubar() {
  return (
    <div className="flex flex-col h-screen">
      <NavbarMenu />

      <div className="bg-slate-50 justify-center border-1 lg:overflow-hidden overflow-y-auto h-screen mt-2 rounded-3xl">
        <BoardNavbar />

        <BoardCardLists />
      </div>
    </div>
  );
}
