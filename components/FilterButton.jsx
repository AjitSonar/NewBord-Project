"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function FilterButton() {
  return (
    <div className="">
      <Button
        isIconOnly
        className="bg-white border-small w-4 h-7"
        size="sm"
        aria-label="Take a photo"
        color="default"
        variant="bordered"
      >
        <Image
          className="rounded-none"
          alt="HeroUI hero Image"
          src="/assets/more-button3.png"
          width={16}
          height={16}
        />
      </Button>
    </div>
  );
}
