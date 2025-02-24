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
import { menuItems } from "./ArrayList";

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between bg-white h-10">
      <div className="mt-1 w-full flex flex-1">
        <div className=" lg:hidden flex-col items-start">
          <div className="gap-2 -mt-1">
            <Button
              onPress={handleClick}
              variant="light"
              size="sm"
              className="w-5 h-10"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <div className=" lg:hidden mr-4 w-15 h-15">
          <Icon
            src="/assets/frame3.png"
            class=" -mt-1 rounded-none"
            width={30}
            height={27}
          />
        </div>
        <div className="flex-grow flex">
          <SearchInput
            placeholder="Search"
            startSrc="/assets/search-013.png"
            startHeight="18px"
            startWidth="18px"
            endSrc="/assets/command@3x.png"
            endHeight="13px"
            endWidth="13px"
            endImgContent="K"
          />
          <div className="hidden  lg:block">
            <TabsButton
              startImg="/assets/change-3.png"
              endImg="/assets/downArray.svg"
              startHeight={16}
              startWidth={30}
              endHeight={35}
              endWidth={35}
            />
          </div>
        </div>
      </div>

      <div className="sm:flex hidden pr-5">
        <div className="w-[100px] h-17 -mt-0.5">
          <AddButton
            src="/assets/add-icon3.png"
            width={18}
            height={18}
            content="New"
          />
        </div>

        <Divider orientation="vertical" className=" h-5 my-2" />

        <OpenButton
          src="/assets/target-02-2@3x.png"
          width="18px"
          height="18px"
        />

        <OpenButton
          src="/assets/bubble-chat-23.png"
          width="18px"
          height="18px"
        />

        <div className=" relative">
          <div className="w-2 h-2 bg-red-400 absolute top-1.5 left-7 z-40 rounded-full"></div>

          <OpenButton
            src="/assets/notification-02@3x.png"
            width="18px"
            height="18px"
          />
        </div>

        <AvatarImage1 src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </div>
      {isOpen && (
        <div className="lg:hidden bg-neutral-200 border-b-2 mt-12 h-auto w-full flex flex-col items-start absolute top-18 left-0 z-50">
          <div>
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="flex items-start m-1 ml-8 mt-3 mb-3 justify-start"
              >
                <Icon
                  src={item.src}
                  class="ml-2 rounded-none"
                  width={21}
                  height={19}
                />
                <p className="ml-5 mt-1.5 ">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
