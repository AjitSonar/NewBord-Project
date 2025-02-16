"use client";

import { Image } from "@heroui/react";
export default function FrameLogo() {
  return (
    <div className="items-start -mt-2 w-52 h-10">
      <Image
        className=" rounded-none"
        alt="HeroUI hero Image"
        src="/assets/frame3.png"
        width={21}
        height={19}
      />
    </div>
  );
}
