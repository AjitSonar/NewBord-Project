"use client";

import { Divider } from "@heroui/react";
import Icon from "./Icon";
import LayoutButton from "./LayoutButton";
import ShareButton from "./ShareButton";

export default function BoardNavbar() {
  return (
    <div className="flex mt-2 mb-2 justify-between">
      <div className="flex m-3">
        <Icon src="/assets/anger-symbol2.png" height={23} width={23} />

        <h1 className="ml-1 mt-1.5 text-xl font-bold"> Website Design </h1>

        <div className="mt-1 ml-1.5">
          <Icon src="/assets/arrow-down (3).png" width={16} height={16} />
        </div>
      </div>

      <div className="-ml-5">
        <div className="flex gap-2 mt-3 pr-5 items-center">
          <Divider orientation="vertical" className=" h-5 my-2" />

          <LayoutButton src="/assets/layout-012.png" width="16" height="16" />

          <LayoutButton src="/assets/more-button3.png" width="16" height="16" />

          <ShareButton content="Share" />
        </div>
      </div>
    </div>
  );
}
