"use client";

import { Divider } from "@heroui/divider";
import Icon from "./Icon.jsx";
import FoldersSidebar from "./FoldersSidebar.jsx";

export default function SidebarHeader() {
  return (
    <div className="flex flex-col h-full relative">
      <div className="hidden lg:block items-start -mt-2 -ml-2 w-52 h-10">
        <Icon
          src="/assets/frame3.png"
          class="ml-2 rounded-none"
          width="23px"
          height="23px"
        />
      </div>

      {/* AH Component */}
      <div className="relative  h-[43px]  w-[282px]">
        <FoldersSidebar
          startIconSrc="/assets/briefcase3.png"
          StartIconWidth="24px"
          StartIconHeight="21px"
          startIconClass="rounded-none mt-1"
          content="Atomic House"
          contentClass="font-bold mt-2 text-[16px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
        <div className="absolute top-3 left-[210px] rounded-full w-5 h-5">
          <Icon
            src="/assets/arrow-down (3).png"
            class="ml-2 rounded-none"
            width="20px"
            height="20px"
          />
        </div>
      </div>

      {/* Inbox Component*/}

      <div className="flex relative  h-[43px]  w-[282px] mt-3">
        <FoldersSidebar
          startIconSrc="/assets/inbox.svg"
          StartIconWidth="21px"
          StartIconHeight="21px"
          startIconClass="rounded-none -mt-3"
          content="Inbox"
          contentClass="text-neutral-500 ml-0.5 -mt-1 text-[14px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
        <div className="bg-slate-200 absolute top-2.5 left-[215px] rounded-full w-[25px] h-[21px]">
          <p className="ml-2 text-xs mt-0.5">6</p>
        </div>
      </div>

      {/* Settings Component  */}

      <div className="flex h-[43px]  w-[282px] mb-1 ">
        <FoldersSidebar
          startIconSrc="/assets/settings3.png"
          StartIconWidth="21px"
          StartIconHeight="21px"
          startIconClass="rounded-none -mt-3"
          content="Settings"
          contentClass="text-neutral-500 -mt-1 text-[14px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>

      <Divider />

      {/* Brand Component  */}

      <div className="flex h-[43px]  w-[282px] mt-2">
        <FoldersSidebar
          startIconSrc="/assets/dashboard3.png"
          StartIconWidth="21px"
          StartIconHeight="21px"
          startIconClass="rounded-none -mt-3"
          content="All Brands"
          contentClass="text-neutral-500 -mt-1 text-[14px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>

      {/* WebDesign Component */}

      <div className="flex bg-slate-100 h-[43px]  w-[282px] rounded-xl -ml-3">
        <div className="py-0.5 flex relative items-center justify-center">
          <FoldersSidebar
            startIconSrc="/assets/anger-symbol3.png"
            StartIconWidth="21px"
            StartIconHeight="21px"
            startIconClass="ml-3 -mt-1.5 rounded-none"
            content="Website Design"
            contentClass="font-bold py-3 ml-2.5 -mt-2.5 text-[14px]"
            endIconSrc=" "
            endIconWidth={0}
            endIconHeight={0}
            endIconClass=" "
          />
          <div className="bg-slate-200 absolute top-2.5 left-[225px]  rounded-full w-[25px] h-[21px]">
            <p className="ml-1.5 text-xs mt-1">24</p>
          </div>
        </div>
      </div>

      {/* Mobile Design Component */}

      <div className="flex  h-[43px]  w-[282px] mt-1">
        <FoldersSidebar
          startIconSrc="/assets/mobile3.png"
          StartIconWidth="21px"
          StartIconHeight="21px"
          startIconClass="rounded-none -mt-3"
          content="Mobile Design"
          contentClass="text-neutral-500 -mt-1 text-[14px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>

      {/* Yellow Folder Component */}

      <div className="flex relative h-[43px]  w-[282px] mt-1">
        <FoldersSidebar
          startIconSrc="/assets/folder.y3.png"
          StartIconWidth="23px"
          StartIconHeight="23px"
          startIconClass="rounded-none -mt-2"
          content="Folder"
          contentClass="text-neutral-500 -mt-1 text-[14px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
        <div className="bg-slate-200 absolute top-3 left-[215px] rounded-full w-[25px] h-[21px]">
          <p className="ml-2 text-xs mt-0.5">3</p>
        </div>
      </div>

      {/* Red Folder Component  */}

      <div className="flex  h-[43px]  w-[282px] mt-1">
        <FoldersSidebar
          startIconSrc="/assets/folder.r3.png"
          StartIconWidth="23px"
          StartIconHeight="23px"
          startIconClass="rounded-none -mt-3"
          content="Folder"
          contentClass="text-neutral-500 -mt-1 text-[14px]"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>
    </div>
  );
}
