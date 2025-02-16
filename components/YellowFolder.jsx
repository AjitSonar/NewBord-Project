"use client";

import { Image } from "@heroui/react";
export default function YellowFolder() {
  return (
    <div className="flex h-6 mt-1.5">
      <Image
        className=""
        alt="HeroUI hero Image"
        src="/assets/folder.y3.png"
        width={20}
        height={20}
      />
      <p className="text-neutral-500 mt-0.5 ml-2 text-xs"> Folder</p>

      <div className="bg-slate-200 ml-28 rounded-full w-5 h-5">
        <p className="ml-1.5 text-xs mt-0.5">3</p>
      </div>
    </div>
  );
}
