"use client";

import { Divider } from "@heroui/react";
import SearchInput from "./Input";
import TabsButton from "./TabsButton";
import AddButton from "./AddButton";
import AvatarImage1 from "./AvatarImage1";
import OpenButton from "./OpenButton";

export default function NavbarMenu() {
  return (
    <div className="hidden lg:flex justify-between bg-white h-10">
      <div className="mt-1 flex">
        <div>
          <SearchInput
            placeholder="Search"
            startSrc="/assets/search-013.png"
            endSrc="/assets/command@3x.png"
            startHeight={15}
            startWidth={15}
            endHeight={12}
            endWidth={16}
            endImgContent="K"
          />
        </div>

        <div>
          <TabsButton
            startImg="/assets/change-3.png"
            endImg="/assets/downArray.svg"
            startHeight={15}
            startWidth={15}
            endHeight={15}
            endWidth={15}
          />
        </div>
      </div>

      <div className="flex pr-4">
        
        <div>
          <AddButton
            src="/assets/add-icon.webp"
            width="17"
            height="17"
            content="New"
          />
        </div>

        <Divider orientation="vertical" className=" h-5 my-2" />

        <OpenButton src="/assets/target-02-2@3x.png" width="17" height="17" />

        <OpenButton src="/assets/bubble-chat-23.png" width="18" height="18" />

        <div className=" relative">
          <div className="w-2 h-2 bg-red-400 absolute top-2 left-6 z-40 rounded-full"></div>

          <OpenButton
            src="/assets/notification-02@3x.png"
            width="18"
            height="18"
          />
        </div>

        <AvatarImage1 src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </div>
    </div>
  );
}
