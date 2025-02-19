"use client";

import { Divider } from "@heroui/divider";
import Icon from "./Icon.jsx";
import FoldersSidebar from "./FoldersSidebar.jsx";

export default function SidebarHeader() {
  return (
    <div className="flex flex-col h-full relative">
      <div className="items-start -mt-2 -ml-2 w-52 h-10">
        <Icon
          src="/assets/frame3.png"
          class="ml-2 rounded-none"
          width={21}
          height={19}
        />
      </div>

      {/* AH Component */}

      <FoldersSidebar
        startIconSrc="/assets/briefcase3.png"
        StartIconWidth={18}
        StartIconHeight={18}
        startIconClass="rounded-none mt-1"
        content="Atomic House"
        contentClass="font-bold mt-2 text-xs"
        endIconSrc="/assets/arrow-down (3).png"
        endIconWidth={16}
        endIconHeight={16}
        endIconClass="ml-16 font-normal mt-0.5"
      />

      {/* Inbox Component*/}

      <div className="flex h-6 mt-1.5">
        <FoldersSidebar
          startIconSrc="/assets/inbox.svg"
          StartIconWidth={19}
          StartIconHeight={19}
          startIconClass="rounded-none -mt-3"
          content="Inbox"
          contentClass="text-neutral-500 ml-0.5 -mt-0.5 text-xs"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
        <div className="bg-slate-200 ml-28 rounded-full w-5 h-5">
          <p className="ml-1.5 text-xs mt-0.5">6</p>
        </div>
      </div>

      {/* Settings Component  */}

      <div className="flex h-6  mb-3 mt-1.5">
        <FoldersSidebar
          startIconSrc="/assets/settings3.png"
          StartIconWidth={19}
          StartIconHeight={19}
          startIconClass="rounded-none -mt-3"
          content="Settings"
          contentClass="text-neutral-500 -mt-0.5 text-xs"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>

      <Divider />

      {/* Brand Component  */}

      <div className="flex h-6 mt-4">
        <FoldersSidebar
          startIconSrc="/assets/dashboard3.png"
          StartIconWidth={18}
          StartIconHeight={18}
          startIconClass="rounded-none -mt-3"
          content="All Brands"
          contentClass="text-neutral-500 -mt-0.5 text-xs"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>

      {/* WebDesign Component */}

      <div className="flex bg-slate-100 h-9 rounded-lg -ml-3">
        <div className="py-0.5 flex items-center justify-center">
          <FoldersSidebar
            startIconSrc="/assets/anger-symbol3.png"
            StartIconWidth={19}
            StartIconHeight={19}
            startIconClass="ml-3 rounded-none"
            content="Website Design"
            contentClass="font-bold py-3 ml-2.5 -mt-0.5 text-xs"
            endIconSrc=" "
            endIconWidth={0}
            endIconHeight={0}
            endIconClass=" "
          />
          <div className="bg-slate-200 mt-1 ml-14 rounded-full w-6 h-6">
            <p className="ml-1 text-xs mt-1">24</p>
          </div>
        </div>
      </div>

      {/* Mobile Design Component */}

      <div className="flex h-6 mt-2">
        <FoldersSidebar
          startIconSrc="/assets/mobile3.png"
          StartIconWidth={19}
          StartIconHeight={19}
          startIconClass="rounded-none -mt-3"
          content="Mobile Design"
          contentClass="text-neutral-500 -mt-0.5 text-xs"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>

      {/* Yellow Folder Component */}
      
      <div className="flex h-6 mt-1.5">
        <FoldersSidebar
          startIconSrc="/assets/folder.y3.png"
          StartIconWidth={19}
          StartIconHeight={19}
          startIconClass="rounded-none -mt-3"
          content="Folder"
          contentClass="text-neutral-500 -mt-0.5  text-xs"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
        <div className="bg-slate-200 ml-28 mt-0.5 rounded-full w-5 h-5">
          <p className="ml-1.5 text-xs mt-0.5">3</p>
        </div>
      </div>

      {/* Red Folder Component  */}

      <div className="flex h-6 mt-2">
        <FoldersSidebar
          startIconSrc="/assets/folder.r3.png"
          StartIconWidth={19}
          StartIconHeight={19}
          startIconClass="rounded-none -mt-3"
          content="Folder"
          contentClass="text-neutral-500 -mt-0.5 text-xs"
          endIconSrc=" "
          endIconWidth={0}
          endIconHeight={0}
          endIconClass=" "
        />
      </div>
    </div>
  );
}
