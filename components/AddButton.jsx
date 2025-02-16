"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function AddButton() {
  return (
    <div className="">
      <Button
        isExternal
        className="text-sm bg-white"
        startContent={
          <Image
            className="ml-1"
            alt="HeroUI hero Image"
            src="/assets/add-icon.webp"
            width={17}
            height={17}
          />
        }
      >
        <p className="ml-1 text-sm text-neutral-500 font-medium">New</p>
      </Button>
    </div>
  );
}
