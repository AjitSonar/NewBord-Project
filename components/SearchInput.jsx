"use client";

import { Input } from "@heroui/input";
import { Image } from "@heroui/react";

export default function SearchInput() {
  return (
    <div className="w-[430px]">
      <Input
        placeholder="Search"
        type="text"
        size="sm"
        className="placeholder:text-[7px]"
        startContent={
          <Image
            className="rounded-none"
            alt="HeroUI hero Image"
            src="/assets/search-013.png"
            width={15}
            height={15}
          />
        }
        endContent={
          <div className="flex">
            <Image
              className="mt-1 rounded-none"
              alt="HeroUI hero Image"
              src="/assets/command@3x.png"
              width={16}
              height={12}
            />
            <p className="mt-0.5 text-xs text-neutral-500 px-1">K</p>
          </div>
        }
      />
    </div>
  );
}
