"use client";

import { Divider } from "@heroui/react";
import SearchInput from "./SearchInput";
import TabsButton from "./TabsButton";
import AddButton from "./AddButton";
import TargetButton from "./TargetButton";
import MessageButton from "./MessageButton";
import NotificationButton from "./NotificationButton";
import AvatarImage1 from "./AvatarImage1";

export default function NavbarMenu() {
  return (
    <div className="flex justify-between bg-white h-10">
      <div className="mt-1 flex">
        <SearchInput />

        <TabsButton />
      </div>

      <div className="flex pr-4">
        <AddButton />

        <Divider orientation="vertical" className=" h-5 my-2" />

        <TargetButton />

        <MessageButton />

        <NotificationButton />

        <AvatarImage1 />
      </div>
    </div>
  );
}
