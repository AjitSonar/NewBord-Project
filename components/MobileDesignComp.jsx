"use client";

import { Image } from "@heroui/react";
export default function MobileDesignComp() {
  return (
    <div className="flex h-6 mt-2">
      <Image
        className="rounded-none"
        alt="HeroUI hero Image"
        src="/assets/mobile3.png"
        width={18}
        height={18}
      />
      <p className="text-neutral-500 ml-2 text-xs"> Mobile Design</p>
    </div>
  );
}
