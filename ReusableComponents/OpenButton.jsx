"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function OpenButton(props) {
  return (
    <div className="">
      <Button
        isIconOnly
        size="sm"
        className="ml-2 text-sm" 
        aria-label="Like"
        color="white"
      >
        <Image
          className="ml-1 mt-1 rounded-none"
          alt="HeroUI hero Image"
          src={props.src}
          width={props.width}
          height={props.height}
        />
      </Button>
    </div>
  );
}
