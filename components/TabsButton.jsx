"use client";

import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function TabsButton(props) {
  return (
    <div className="">
      <Button
        isExternal
        className="text-sm ml-1 border-small w-[120px] h-[35px] text-white"
        startContent={
          <div className="">
            <Image
              className="rounded-none"
              alt="HeroUI hero Image"
              src={props.startImg}
              width={props.startWidth}
              height={props.startHeight}
            />
          </div>
        }
        endContent={
          <Image
            className="rounded-none"
            alt="HeroUI hero Image"
            src={props.endImg}
            width={props.endWidth}
            height={props.endHeight}
          />
        }
        variant="bordered"
        color="default"
      >
        <p className="text-black text-[14px] font-bold">11 tabs</p>
      </Button>
    </div>
  );
}
