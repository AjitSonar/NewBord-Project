"use client";

import { Image } from "@heroui/react";

export default function Logo() {
  return (
    <div className="mt-2">
      <Image
        className="ml-2 rounded-none"
        alt="HeroUI hero Image"
        src="/assets/anger-symbol2.png"
        width={23}
        height={23}
      />
    </div>
  );
}
