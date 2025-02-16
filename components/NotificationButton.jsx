"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function NotificationButton() {
  return (
    <div className=" relative">
      <div className="w-2 h-2 bg-red-400 absolute top-2 left-6 z-40 rounded-full"></div>
      <Button
        isIconOnly
        size="sm"
        className="ml-2 text-sm"
        aria-label="Like"
        color="white"
      >
        <Image
          className="mt-1 rounded-none"
          alt="HeroUI hero Image"
          src="/assets/notification-02@3x.png"
          width={18}
          height={18}
        />
      </Button>
    </div>
  );
}
