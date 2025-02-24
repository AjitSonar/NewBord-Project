"use client";

import Icon from "./Icon.jsx";
import FoldersSidebar from "./FoldersSidebar.jsx";
import { menuItems } from "./ArrayList.jsx";

export default function SidebarHeader() {
  return (
    <div className="flex flex-col h-full ">
      <div className="hidden lg:block items-start mb-2.5 -mt-2 -ml-2 w-52 h-10">
        <Icon
          src="/assets/frame3.png"
          class="ml-3.5  rounded-none"
          width="25px"
          height="25px"
        />
      </div>

      <div className="w-full">
        <div className="">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <FoldersSidebar
                startIconSrc={item.src}
                StartIconWidth="24px"
                StartIconHeight="21px"
                startIconClass={`ml-2 rounded-none ${item.size} flex items-center justify-center`}
                content={item.title}
                contentClass={`ml-3 mt-1.5 ${item.bold ? "font-bold" : ""} `}
              />

              {item.title === "Settings" && (
                <hr className="border-gray-300 my-2" />
              )}
              {item.count > 0 && (
                <div className="absolute right-3 top-1/2 transform -translate-y-2 bg-slate-200 rounded-full w-[25px] h-[21px] flex items-center justify-center">
                  <p className="text-xs">{item.count}</p>
                </div>
              )}
              {item.itHasImg && (
                <div className="absolute top-2 left-[210px] rounded-full w-5 h-5">
                  <Icon
                    src="/assets/arrow-down (3).png"
                    class="ml-7 rounded-none"
                    width="20px"
                    height="20px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
