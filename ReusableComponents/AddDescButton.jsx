"use client";

import { Button } from "@heroui/react";

export default function AddDescButton() {
  return (
    <div className="">
      <Button
        className="text-[12px] font-bold w-[10px] ml-1 bg-white border-small h-6"
        variant="bordered"
        size="sm"
      >
        Add desc
      </Button>
    </div>
  );
}
