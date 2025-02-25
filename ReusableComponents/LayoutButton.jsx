"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function LayoutButton(props) {
  return (
    <div className="">
      <Button
        isIconOnly
        variant="bordered"
        className="bg-white border-small w-[36px] h-[36px]"
        size="sm"
        aria-label="Like"
        color="default"
      >
        <Image
          className="rounded-none"
          alt="HeroUI hero Image"
          src={props.src}
          width={props.width}
          height={props.height}
        />
      </Button>
    </div>
  );
}
