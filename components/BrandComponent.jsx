"use client";

import { Image } from "@heroui/react";
export default function BrandComponent() {
  return (
    <div className="flex h-6 mt-4">
      <Image
        className="font-bold rounded-none"
        alt="HeroUI hero Image"
        src="/assets/dashboard3.png"
        width={20}
        height={20}
      />
      <p className="text-neutral-500 ml-2 text-xs"> All Brands</p>
    </div>
  );
}
