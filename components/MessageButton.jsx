"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function MessageButton() {
  return (
    <div className="">
      <Button
        isIconOnly
        className="ml-2 font-bold"
        size="sm"
        aria-label="Take a photo"
        color="white"
      >
        <Image
          className="ml-1 mt-1 rounded-none"
          alt="HeroUI hero Image"
          src="/assets/bubble-chat-23.png"
          width={18}
          height={18}
        />
      </Button>
    </div>
  );
}
