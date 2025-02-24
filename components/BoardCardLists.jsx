"use client";

import { Image } from "@heroui/react";
import { Card, CardHeader } from "@heroui/card";
import Open7tabButton from "./Open7tabButton";
import AddDescButton from "./AddDescButton";
import { cardData } from "./ArrayList";
import CardListLink from "./CardListLink";

export default function BoardCardLists() {
  return (
    <div className="flex px-2 flex-wrap ">
      <div className="flex w-full justify-evenly lg:justify-start flex-wrap">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="shadow-none border-1  w-[400px] h-auto m-1 flex-col"
          >
            <CardHeader className="flex flex-col items-start">
              <div className="flex">
                <Image
                  alt="heroui logo"
                  width="29px"
                  height="29px"
                  radius="sm"
                  src={card.emoji}
                />
                <div className="flex ml-1 mb-1 flex-col">
                  <p className="text-[21px] font-bold">{card.title}</p>
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
                    <CardListLink
                      src={link.icon}
                      name={link.name}
                      url={link.url}
                    />
                    {link.hasImg && (
                      <div className="bg-sky-100 mt-3 ml-20 rounded-full w-[25px] h-[25px]">
                        <Image
                          className="mt-1.5 ml-1.5"
                          alt="heroui logo"
                          width="14px"
                          height="14px"
                          radius="sm"
                          src={link.img}
                        />
                      </div>
                    )}
                    {link.itHasImg && (
                      <div className="bg-purple-100 mt-3 ml-20 rounded-full w-[25px] h-[25px]">
                        <Image
                          className="mt-1.5 ml-1.5"
                          alt="heroui logo"
                          width="14px"
                          height="14px"
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
