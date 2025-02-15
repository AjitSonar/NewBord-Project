"use client";

import { Button, Divider } from "@heroui/react";
import { Input } from "@heroui/input";
import { Image } from "@heroui/react";
import { Avatar } from "@heroui/react";

export default function NavbarMenu() {
  return (
    <div className="flex justify-between bg-white h-10">
      <div className="mt-1 flex">
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
        <Button
          isExternal
          className="text-sm ml-1 border-small w-30 h-8 text-white"
          startContent={
            <div className="">
              <Image
                className="rounded-none"
                alt="HeroUI hero Image"
                src="/assets/change-3.png"
                width={15}
                height={15}
              />
            </div>
          }
          endContent={
            <Image
              className="rounded-none"
              alt="HeroUI hero Image"
              src="/assets/downArray.svg"
              width={15}
              height={15}
            />
          }
          variant="bordered"
          color="default"
        >
          <p className="text-black text-xs font-bold">11 tabs</p>
        </Button>
      </div>

      <div className="flex pr-4">
        <Button
          isExternal
          className="text-sm bg-white"
          startContent={
            <Image
              className="ml-1"
              alt="HeroUI hero Image"
              src="/assets/add-icon.webp"
              width={17}
              height={17}
            />
          }
        >
          <p className="ml-1 text-sm text-neutral-500 font-medium">New</p>
        </Button>

        <Divider orientation="vertical" className=" h-5 my-2" />

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
            src="/assets/target-02-2@3x.png"
            width={17}
            height={17}
          />
        </Button>
        <Button
          isIconOnly
          className="ml-2 font-bold"
          size="sm"
          aria-label="Take a photo"
          color="white"
        >
          <Image
            className="ml-1 mt-1 rounded-none"
            alt="HeroUI hero Image"
            src="/assets/bubble-chat-23.png"
            width={18}
            height={18}
          />
        </Button>
        <div className=" relative">
          <div className="w-2 h-2 bg-red-400 absolute top-2 left-6 z-40 rounded-full"></div>
          <Button
            isIconOnly
            size="sm"
            className="ml-2 text-sm"
            aria-label="Like"
            color="white"
          >
            <Image
              className="mt-1 rounded-none"
              alt="HeroUI hero Image"
              src="/assets/notification-02@3x.png"
              width={18}
              height={18}
            />
          </Button>
        </div>

        <Avatar
          className="ml-2 mt-1"
          size="sm"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </div>
    </div>
  );
}
