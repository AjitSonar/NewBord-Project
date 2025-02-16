"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function TabsButton() {
  return (
    <div className="">
      <Button
        isExternal
        className="text-sm ml-1 border-small w-30 h-8 text-white"
        startContent={
          <div className="">
            <Image
              className="rounded-none"
              alt="HeroUI hero Image"
              src="/assets/change-3.png"
              width={15}
              height={15}
            />
          </div>
        }
        endContent={
          <Image
            className="rounded-none"
            alt="HeroUI hero Image"
            src="/assets/downArray.svg"
            width={15}
            height={15}
          />
        }
        variant="bordered"
        color="default"
      >
        <p className="text-black text-xs font-bold">11 tabs</p>
      </Button>
    </div>
  );
}
