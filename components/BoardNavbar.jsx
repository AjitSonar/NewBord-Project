"use client";

import { Divider } from "@heroui/react";
import Logo from "./Logo";
import DownArrow from "./DownArrow";
import LayoutButton from "./LayoutButton";
import FilterButton from "./FilterButton";
import ShareButton from "./ShareButton";

export default function BoardNavbar() {
  return (
    <div className="flex mt-2 mb-2 justify-between">
      <div className="flex m-3">
        <Logo />

        <h1 className="ml-4 mt-1.5 text-xl font-bold"> Website Design </h1>

        <DownArrow />
      </div>

      <div className="-ml-5">
        <div className="flex gap-2 mt-3 pr-5 items-center">
          <Divider orientation="vertical" className=" h-5 my-2" />

          <LayoutButton />

          <FilterButton />

          <ShareButton />
        </div>
      </div>
    </div>
  );
}
