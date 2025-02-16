"use client";

import { Button } from "@heroui/react";

export default function ShareButton() {
  return (
    <div className="">
      <Button
        variant="bordered"
        className=" bg-white border-small h-7"
        size="sm"
      >
        <p className="text-black font-bold">Share </p>
      </Button>
    </div>
  );
}
