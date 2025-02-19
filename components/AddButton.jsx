"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function AddButton(props) {
  return (
    <div className="">
      <Button
        isExternal
        className="text-sm bg-white"
        startContent={
          <Image
            className="ml-1"
            alt="HeroUI hero Image"
            src={props.src}
            width={props.width}
            height={props.height}
          />
        }
      >
        <p className="ml-1 text-sm text-neutral-500 font-medium">
          {props.content}
        </p>
      </Button>
    </div>
  );
}
