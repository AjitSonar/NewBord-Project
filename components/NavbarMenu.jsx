"use client";

import { Button, Divider } from "@heroui/react";
import SearchInput from "./Input";
import TabsButton from "./TabsButton";
import AddButton from "./AddButton";
import AvatarImage1 from "./AvatarImage1";
import OpenButton from "./OpenButton";
import Icon from "./Icon";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex lg:flex justify-between bg-white h-10">
      <div className="">
        <div className="mt-1 flex">
          <div className=" lg:hidden md:flex flex-col items-start">
            <div className="gap-2">
              <Button
                onPress={handleClick}
                variant="bordered"
                size="sm"
                className="w-5 h-10"
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
          <div className="items-start lg:hidden mr-4 w-15 h-15">
            <Icon
              src="/assets/frame3.png"
              class="ml-2 -mt-1 rounded-none"
              width={35}
              height={30}
            />
          </div>
          <div>
            <SearchInput
              placeholder="Search"
              startSrc="/assets/search-013.png"
              startHeight={15}
              startWidth={15}
              endSrc="/assets/command@3x.png"
              endHeight={12}
              endWidth={16}
              endImgContent="K"
            />
          </div>

          <div className="hidden lg:block">
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

        <div className="lg:flex hidden pr-4">
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
      {isOpen && (
        <div className="lg:hidden bg-neutral-200 mt-10 h-auto w-full flex flex-col justify-center items-center absolute top-18 left-0 z-50">
          <SidebarHeader />
        </div>
      )}
    </div>
  );
}
