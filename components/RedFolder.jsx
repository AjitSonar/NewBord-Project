"use client";

import { Image } from "@heroui/react";
export default function RedFolder() {
  return (
    <div className="flex h-6 mt-2">
      <div>
        <Image
          className=""
          alt="HeroUI hero Image"
          src="/assets/folder.r3.png"
          width={20}
          height={20}
        />
      </div>
      <p className="text-neutral-500 mt-0.5 ml-2 text-xs"> Folder</p>
    </div>
  );
}
