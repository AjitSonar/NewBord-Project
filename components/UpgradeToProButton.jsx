"use client";

import { Button } from "@heroui/react";

export default function UpgradeToProButton() {
  return (
    <div className="">
      <Button
        className="w-24 h-7 ml-2 text-[10px]"
        radius="sm"
        color="primary"
        variant="solid"
        size="sm"
      >
        Upgrade to Pro
      </Button>
    </div>
  );
}
