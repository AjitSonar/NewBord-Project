"use client";

import { Image } from "@heroui/react";
import { Card, CardHeader } from "@heroui/card";
import Open7tabButton from "./Open7tabButton";
import AddDescButton from "./AddDescButton";
import { cardData } from "./ArrayList";

export default function BoardCardLists() {
  return (
    <div className="flex px-2 flex-wrap">
      <div className="flex flex-wrap">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="shadow-none border-1 max-w-[320px] m-1 flex-col"
          >
            <CardHeader className="flex flex-col items-start">
              <div className="flex">
                <Image
                  alt="heroui logo"
                  width={25}
                  height={25}
                  radius="sm"
                  src={card.emoji}
                />
                <div className="flex ml-1 mb-1 flex-col">
                  <p className="text-medium font-bold">{card.title}</p>
                </div>
              </div>

              <div className="">
                <div className="flex">
                  <Open7tabButton />
                  <AddDescButton />
                </div>
              </div>
              <div className="flex-col mt-1 items-start w-80">
                {card.links.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex text-left justify-start gap-2 mt-2"
                  >
                    <div>
                      <Image
                        alt="heroui logo"
                        height={25}
                        radius="sm"
                        src={link.icon}
                        width={25}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold ">{link.name}</p>
                      <p className="text-[9px] text-default-500">{link.url}</p>
                    </div>
                    {link.hasImg && (
                      <div className="bg-sky-100 mt-1 ml-12 rounded-full w-6 h-6">
                        <Image
                          className="mt-1 ml-1"
                          alt="heroui logo"
                          width={15}
                          height={15}
                          radius="sm"
                          src={link.img}
                        />
                      </div>
                    )}
                    {link.itHasImg && (
                      <div className="bg-purple-100 mt-1 ml-12 rounded-full w-6 h-6">
                        <Image
                          className="mt-1 ml-1"
                          alt="heroui logo"
                          width={15}
                          height={15}
                          radius="sm"
                          src={link.img}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
