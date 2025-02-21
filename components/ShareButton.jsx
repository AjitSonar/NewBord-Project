"use client";

import { Button } from "@heroui/react";

export default function ShareButton(props) {
  return (
    <div className="">
      <Button
        variant="bordered"
        className=" bg-white border-small h-[36px] w-[63px]"
        size="sm"
      >
        <p className="text-black text-[14px] font-bold">{props.content} </p>
      </Button>
    </div>
  );
}
