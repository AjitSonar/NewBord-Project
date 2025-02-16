"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function TargetButton() {
  return (
    <div className="">
      <Button
        isIconOnly
        size="sm"
        className="ml-2 text-sm"
        aria-label="Like"
        color="white"
      >
        <Image
          className="ml-1 mt-1 rounded-none"
          alt="HeroUI hero Image"
          src="/assets/target-02-2@3x.png"
          width={17}
          height={17}
        />
      </Button>
    </div>
  );
}
