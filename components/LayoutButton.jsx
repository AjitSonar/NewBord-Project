"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function LayoutButton() {
  return (
    <div className="">
      <Button
        isIconOnly
        variant="bordered"
        className="bg-white border-small w-4 h-7"
        size="sm"
        aria-label="Like"
        color="default"
      >
        <Image
          className="rounded-none"
          alt="HeroUI hero Image"
          src="/assets/layout-012.png"
          width={16}
          height={16}
        />
      </Button>
    </div>
  );
}
