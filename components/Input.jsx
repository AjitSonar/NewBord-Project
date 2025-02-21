"use client";

import { Input } from "@heroui/input";
import { Image } from "@heroui/react";

export default function SearchInput(props) {
  return (
    <div className="w-[280px] h-7 lg:items-start items-end lg:h-[40px] lg:w-[663px]">
      <Input
        placeholder={props.placeholder}
        type="text"
        size="sm"
        className="placeholder:text-[7px]"
        startContent={
          <Image
            className="rounded-none"
            alt="HeroUI hero Image"
            src={props.startSrc}
            width={props.startWidth}
            height={props.startHeight}
          />
        }
        endContent={
          <div className="flex pr-3">
            <Image
              className="mt-1 rounded-none"
              alt="HeroUI hero Image"
              src={props.endSrc}
              width={props.endWidth}
              height={props.endHeight}
            />
            <p className="-ml-0.5 w-[8px] h-[15px] text-neutral-500 px-1">
              {props.endImgContent}
            </p>
          </div>
        }
      />
    </div>
  );
}
