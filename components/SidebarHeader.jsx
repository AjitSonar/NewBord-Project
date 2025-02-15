"use client";

import { Image } from "@heroui/react";
import { Divider } from "@heroui/divider";

export default function SidebarHeader() {
  return (
    <div className="flex flex-col h-full relative">

        {/* Sidebar Header */}

      <div className="items-start -mt-2 w-52 h-10">
        <Image
          className=" rounded-none"
          alt="HeroUI hero Image"
          src="/assets/frame3.png"
          width={21}
          height={19}
        />
      </div>
      <div className="flex h-10 mt-1 ">
        <div className="w-7 h-7 items-center justify-center">
          <Image
            className="rounded-none mt-1"
            alt="HeroUI hero Image"
            src="/assets/briefcase3.png"
            width={18}
            height={18}
          />
        </div>
        <h1 className="font-bold mt-1.5 text-xs">Atomic House</h1>
        <Image
          className="ml-16 font-normal mt-1"
          alt="HeroUI hero Image"
          src="/assets/arrow-down (3).png"
          width={16}
          height={16}
        />
      </div>
      <div className="flex h-6 mt-1.5">
        <Image
          className=""
          alt="HeroUI hero Image"
          src="/assets/inbox.svg"
          width={20}
          height={20}
        />
        <p className="text-neutral-500 ml-2 text-xs">Inbox</p>

        <div className="bg-slate-200 ml-28 rounded-full w-5 h-5">
          <p className="ml-1.5 text-xs mt-0.5">6</p>
        </div>
      </div>
      <div className="flex h-6 mt-2 mb-3">
        <Image
          className=""
          alt="HeroUI hero Image"
          src="/assets/settings3.png"
          width={20}
          height={20}
        />
        <p className="text-neutral-500 ml-2 text-xs">Settings</p>
      </div>

      <Divider />

      <div className="flex h-6 mt-4">
        <Image
          className="font-bold rounded-none"
          alt="HeroUI hero Image"
          src="/assets/dashboard3.png"
          width={20}
          height={20}
        />
        <p className="text-neutral-500 ml-2 text-xs"> All Brands</p>
      </div>
      <div className="flex bg-slate-100 h-9 rounded-lg -ml-3">
        <div className="py-2 items-center justify-center">
          <Image
            className="ml-3 rounded-none"
            alt="HeroUI hero Image"
            src="/assets/anger-symbol3.png"
            width={20}
            height={20}
          />
        </div>
        <h1 className="font-bold py-3 ml-5 text-xs">Website Design</h1>
        <div className="bg-slate-200 mt-1.5 ml-12 rounded-full w-6 h-6">
          <p className="ml-1 text-xs mt-1">24</p>
        </div>
      </div>
      <div className="flex h-6 mt-2">
        <Image
          className="rounded-none"
          alt="HeroUI hero Image"
          src="/assets/mobile3.png"
          width={18}
          height={18}
        />
        <p className="text-neutral-500 ml-2 text-xs"> Mobile Design</p>
      </div>
      <div className="flex h-6 mt-1.5">
        <Image
          className=""
          alt="HeroUI hero Image"
          src="/assets/folder.y3.png"
          width={20}
          height={20}
        />
        <p className="text-neutral-500 mt-0.5 ml-2 text-xs"> Folder</p>

        <div className="bg-slate-200 ml-28 rounded-full w-5 h-5">
          <p className="ml-1.5 text-xs mt-0.5">3</p>
        </div>
      </div>
      <div className="flex h-6 mt-2">
        <div>
          <Image
            className=""
            alt="HeroUI hero Image"
            src="/assets/folder.r3.png"
            width={20}
            height={20}
          />
        </div>
        <p className="text-neutral-500 mt-0.5 ml-2 text-xs"> Folder</p>
      </div>
    </div>
  );
}