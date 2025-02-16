"use client";

import { Image } from "@heroui/react";
import { Card, CardHeader } from "@heroui/card";

export default function ChromeExtensionCard() {
  return (
    <div className="items-start mt-3">
      <Card className="w-[230px] shadow-none border-1 -ml-2 rounded-lg">
        <CardHeader className="flex h-12 gap-x-2 -ml-1">
          <Image
            alt="heroui logo"
            height={25}
            radius="sm"
            src="/assets/chrome3.png"
            width={25}
          />
          <div className="flex flex-col">
            <p className="text-[10px] text-black">Install from</p>
            <p className="text-[10px] font-bold">Chrome Extension Store</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
