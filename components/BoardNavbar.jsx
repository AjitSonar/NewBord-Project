"use client";

import { Button, Divider } from "@heroui/react";
import { Image } from "@heroui/react";

export default function BoardNavbar() {
  return (
    <div className="flex mt-2 mb-2 justify-between">
      <div className="flex m-3">
        <div className="mt-2">
          <Image
            className="ml-2 rounded-none"
            alt="HeroUI hero Image"
            src="/assets/anger-symbol2.png"
            width={23}
            height={23}
          />
        </div>
        <h1 className="ml-4 mt-1.5 text-xl font-bold"> Website Design </h1>

        <div className="mt-3">
          <Image
            className="ml-2"
            alt="HeroUI hero Image"
            src="/assets/arrow-down (3).png"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className="-ml-5">
        <div className="flex gap-2 mt-3 pr-5 items-center">
          <Divider orientation="vertical" className=" h-5 my-2" />

          <Button
            isIconOnly
            variant="bordered"
            className="bg-white border-small w-4 h-7"
            size="sm"
            aria-label="Like"
            color="default"
          >
            <Image
              className="rounded-none"
              alt="HeroUI hero Image"
              src="/assets/layout-012.png"
              width={16}
              height={16}
            />
          </Button>
          <Button
            isIconOnly
            className="bg-white border-small w-4 h-7"
            size="sm"
            aria-label="Take a photo"
            color="default"
            variant="bordered"
          >
            <Image
              className="rounded-none"
              alt="HeroUI hero Image"
              src="/assets/more-button3.png"
              width={16}
              height={16}
            />
          </Button>
          <Button
            variant="bordered"
            className=" bg-white border-small h-7"
            size="sm"
          >
            <p className="text-black font-bold">Share </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
