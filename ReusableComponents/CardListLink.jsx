"use client";

import { Image } from "@heroui/react";

export default function CardListLink(props) {
  return (
    <div className="flex text-left justify-start gap-2 mt-2">
      <div>
        <Image
          alt="heroui logo"
          height="29px"
          radius="sm"
          src={props.src}
          width="29px"
          className="mt-1"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] font-bold ">{props.name}</p>
        <p className="text-[12px] text-default-500">{props.url}</p>
      </div>
    </div>
  );
}
