"use client";

import { Image } from "@heroui/react";
export default function AHComponent() {
  return (
    <div className="flex h-10 mt-1 ">
      <div className="w-7 h-7 items-center justify-center">
        <Image
          className="rounded-none mt-1"
          alt="HeroUI hero Image"
          src="/assets/briefcase3.png"
          width={18}
          height={18}
        />
      </div>
      <h1 className="font-bold mt-1.5 text-xs">Atomic House</h1>
      <Image
        className="ml-16 font-normal mt-1"
        alt="HeroUI hero Image"
        src="/assets/arrow-down (3).png"
        width={16}
        height={16}
      />
    </div>
  );
}
