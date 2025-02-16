"use client";

import { Image } from "@heroui/react";
import { Card, CardHeader } from "@heroui/card";
import { tabItems } from "./ArrayList";
import Open7tabButton from "./Open7tabButton";
import AddDescButton from "./AddDescButton";

export default function MyFavorites() {
  return (
    <div className="">
      <Card className="shadow-none border-1 max-w-[320px] m-1 flex-col">
        <CardHeader className="flex flex-col items-start">
          <div className="flex">
            <Image
              alt="heroui logo"
              width={25}
              height={25}
              radius="sm"
              src="/assets/wrapped-gift3.png"
            />
            <div className="flex ml-1 mb-1 flex-col">
              <p className="text-medium font-bold">My Favorites</p>
            </div>
          </div>

          <div className="">
            <div className="flex">
              <Open7tabButton />
              <AddDescButton />
            </div>
          </div>
          <div className="flex-col mt-1 items-start w-80">
            {tabItems.map((item, index) => (
              <div
                key={index}
                className="flex text-left justify-start gap-2 mt-2"
              >
                <div>
                  <Image
                    alt="heroui logo"
                    height={25}
                    radius="sm"
                    src={item.path}
                    width={25}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold ">{item.title}</p>
                  <p className="text-[9px] text-default-500">
                    {item.description}
                  </p>
                </div>
                {item.hasImg && (
                  <div className="bg-sky-100 mt-1 ml-12 rounded-full w-6 h-6">
                    <Image
                      className="mt-1 ml-1"
                      alt="heroui logo"
                      width={15}
                      height={15}
                      radius="sm"
                      src={item.img}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
