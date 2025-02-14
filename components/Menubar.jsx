"use client";

import { Button, Divider } from "@heroui/react";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/icons";
import { Image } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function Menubar() {
  const tabItems = [
    {
      key: 0,
      path: " /assets/instagram3.png",
      title: "Instagram Posts",
      description: "https://www.instagram.com/",
      hasImg: true,
      itHasImg: false,
      img: "/assets/bubble-chat3.png",
    },
    {
      key: 1,
      path: " /assets/youtube3.png",
      title: "YouTube Channel YY ",
      description: "https://www.instagram.com/",
      hasImg: false,
      itHasImg: false,
      img: "",
    },
    {
      key: 2,
      path: " /assets/facebook.svg",
      title: "Anil Kapoor Posts 2",
      description: "https://www.instagram.com/",
      hasImg: false,
      itHasImg: true,
      img: "/assets/target-023.png",
    },
    {
      key: 3,
      path: " /assets/twitter3.png",
      title: "Tweet-Narendra Modi",
      description: "https://www.instagram.com/",
      hasImg: false,
      itHasImg: false,
      img: "",
    },
    {
      key: 4,
      path: " /assets/pinterest3.png",
      title: "Pinterest - Images ",
      description: "https://www.instagram.com/",
      hasImg: false,
      itHasImg: false,
      img: "",
    },
    {
      key: 5,
      path: " /assets/reddit3.png",
      title: "Reddit-Hello",
      description: "https://www.instagram.com/",
      hasImg: false,
      itHasImg: false,
      img: "",
    },
    {
      key: 6,
      path: " /assets/linkedin3.png",
      title: "Linkedin-New Post",
      description: "https://www.instagram.com/",
      hasImg: false,
      itHasImg: false,
      img: "",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-white h-10">
        <div className="mt-1 flex">
          <div className="w-[430px]">
            <Input
              placeholder="Search"
              type="text"
              size="sm"
              className="placeholder:text-[7px]"
              startContent={
                <Image
                  className="rounded-none"
                  alt="HeroUI hero Image"
                  src="/assets/search-013.png"
                  width={15}
                  height={15}
                />
              }
              endContent={
                <div className="flex">
                  <Image
                    className="mt-1 rounded-none"
                    alt="HeroUI hero Image"
                    src="/assets/command@3x.png"
                    width={16}
                    height={12}
                  />
                  <p className="mt-0.5 text-xs text-neutral-500 px-1">K</p>
                </div>
              }
            />
          </div>
          <Button
            isExternal
            className="text-sm ml-1 border-small w-30 h-8 text-white"
            startContent={
              <div className="">
                <Image
                  className="rounded-none"
                  alt="HeroUI hero Image"
                  src="/assets/change-3.png"
                  width={15}
                  height={15}
                />
              </div>
            }
            endContent={
              <Image
                className="rounded-none"
                alt="HeroUI hero Image"
                src="/assets/downArray.svg"
                width={15}
                height={15}
              />
            }
            variant="bordered"
            color="default"
          >
            <p className="text-black text-xs font-bold">11 tabs</p>
          </Button>
        </div>

        <div className="flex pr-4">
          <Button
            isExternal
            className="text-sm bg-white"
            startContent={
              <Image
                className="ml-1"
                alt="HeroUI hero Image"
                src="/assets/add-icon.webp"
                width={17}
                height={17}
              />
            }
          >
            <p className="ml-1 text-sm text-neutral-500 font-medium">New</p>
          </Button>

          <Divider orientation="vertical" className=" h-5 my-2" />

          <Button
            isIconOnly
            size="sm"
            className="ml-2 text-sm"
            aria-label="Like"
            color="white"
          >
            <Image
              className="ml-1 mt-1 rounded-none"
              alt="HeroUI hero Image"
              src="/assets/target-02-2@3x.png"
              width={17}
              height={17}
            />
          </Button>
          <Button
            isIconOnly
            className="ml-2 font-bold"
            size="sm"
            aria-label="Take a photo"
            color="white"
          >
            <Image
              className="ml-1 mt-1 rounded-none"
              alt="HeroUI hero Image"
              src="/assets/bubble-chat-23.png"
              width={18}
              height={18}
            />
          </Button>
          <div className=" relative">
            <div className="w-2 h-2 bg-red-400 absolute top-2 left-6 z-40 rounded-full"></div>
            <Button
              isIconOnly
              size="sm"
              className="ml-2 text-sm"
              aria-label="Like"
              color="white"
            >
              <Image
                className="mt-1 rounded-none"
                alt="HeroUI hero Image"
                src="/assets/notification-02@3x.png"
                width={18}
                height={18}
              />
            </Button>
          </div>

          <Avatar
            className="ml-2 mt-1"
            size="sm"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
        </div>
      </div>

      <div className="bg-slate-50 h-[720px] border-1 overflow-hidden mt-2 rounded-3xl">
        <div className="flex mt-2 mb-2 justify-between">
          <div className="flex m-3">
            <div className="mt-2">
              <Image
                className="ml-2 rounded-none"
                alt="HeroUI hero Image"
                src="/assets/anger-symbol2.png"
                width={23}
                height={23}
              />
            </div>
            <h1 className="ml-4 mt-1.5 text-xl font-bold"> Website Design </h1>

            <div className="mt-3">
              <Image
                className="ml-2"
                alt="HeroUI hero Image"
                src="/assets/arrow-down (3).png"
                width={16}
                height={16}
              />
            </div>
          </div>

          <div className="-ml-5">
            <div className="flex gap-2 mt-3 pr-5 items-center">
              <Divider orientation="vertical" className=" h-5 my-2" />

              <Button
                isIconOnly
                variant="bordered"
                className="bg-white border-small w-4 h-7"
                size="sm"
                aria-label="Like"
                color="default"
              >
                <Image
                  className="rounded-none"
                  alt="HeroUI hero Image"
                  src="/assets/layout-012.png"
                  width={16}
                  height={16}
                />
              </Button>
              <Button
                isIconOnly
                className="bg-white border-small w-4 h-7"
                size="sm"
                aria-label="Take a photo"
                color="default"
                variant="bordered"
              >
                <Image
                  className="rounded-none"
                  alt="HeroUI hero Image"
                  src="/assets/more-button3.png"
                  width={16}
                  height={16}
                />
              </Button>
              <Button
                variant="bordered"
                className=" bg-white border-small h-7"
                size="sm"
              >
                <p className="text-black font-bold">Share </p>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex px-2 flex-wrap">
          <div className="">
            <Card className="shadow-none border-1 max-w-[320px] m-1 flex-col">
              <CardHeader className="flex flex-col items-start">
                <div className="flex">
                  <Image
                    alt="heroui logo"
                    height={25}
                    radius="sm"
                    src="/assets/thumbs-up3.png"
                    width={25}
                  />
                  <div className="flex ml-1 mb-1 flex-col">
                    <p className="text-medium font-bold">Social Media</p>
                  </div>
                </div>

                <div className="">
                  <div className="flex">
                    <Button
                      className="w-16 h-6 text-[10px] font-bold"
                      variant="flat"
                      size="sm"
                    >
                      Open 7 tabs
                    </Button>
                    <Button
                      className="text-[10px] font-bold w-[10px] ml-1 bg-white border-small h-6"
                      variant="bordered"
                      size="sm"
                    >
                      Add desc
                    </Button>
                  </div>
                </div>
                <div className="flex-col mt-1 items-start w-80">
                  {tabItems.map((item, index) => (
                    <div
                      key={item.key}
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
                      {item.itHasImg && (
                        <div className="bg-purple-100 mt-1 ml-12 rounded-full w-6 h-6">
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
          <div className="">
            <Card className="shadow-none border-1 max-w-[320px] m-1 flex-col">
              <CardHeader className="flex flex-col items-start">
                <div className="flex">
                  <Image
                    alt="heroui logo"
                    width={25}
                    height={25}
                    radius="sm"
                    src="/assets/green-heart3.png"
                  />
                  <div className="flex ml-1 mb-1 flex-col">
                    <p className="text-medium font-bold">Personal</p>
                  </div>
                </div>

                <div className="">
                  <div className="flex">
                    <Button
                      variant="flat"
                      className="w-16 h-6 text-[10px] font-bold"
                      size="sm"
                    >
                      Open 7 tabs
                    </Button>
                    <Button
                      className="text-[10px] font-bold w-[10px] ml-1 bg-white border-small h-6"
                      variant="bordered"
                      size="sm"
                    >
                      Add desc
                    </Button>
                  </div>
                </div>
                <div className="flex-col mt-1 items-start w-80">
                  {tabItems.map((item, index) => (
                    <div
                      key={item.key}
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
                      {item.itHasImg && (
                        <div className="bg-purple-100 mt-1 ml-12 rounded-full w-6 h-6">
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
          <div className="">
            <Card className="shadow-none border-1 max-w-[320px] m-1 flex-col">
              <CardHeader className="flex flex-col items-start">
                <div className="flex">
                  <Image
                    alt="heroui logo"
                    width={25}
                    height={25}
                    radius="sm"
                    src="/assets/nazar-amulet3.png"
                  />
                  <div className="flex ml-1 mb-1 flex-col">
                    <p className="text-medium font-bold">Trending</p>
                  </div>
                </div>

                <div className="">
                  <div className="flex">
                    <Button
                      variant="flat"
                      className="w-16 h-6 text-[10px] font-bold"
                      size="sm"
                    >
                      Open 7 tabs
                    </Button>
                    <Button
                      className="text-[10px] font-bold ml-1 w-[10px] bg-white border-small h-6"
                      variant="bordered"
                      size="sm"
                    >
                      Add desc
                    </Button>
                  </div>
                </div>
                <div className="flex-col mt-1 items-start w-80">
                  {tabItems.map((item, index) => (
                    <div
                      key={item.key}
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
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </div>
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
                    <Button
                      variant="flat"
                      className="w-16 h-6 text-[10px] font-bold"
                      size="sm"
                    >
                      Open 7 tabs
                    </Button>
                    <Button
                      className="text-[10px] font-bold w-[10px] ml-1 bg-white border-small h-6"
                      variant="bordered"
                      size="sm"
                    >
                      Add desc
                    </Button>
                  </div>
                </div>
                <div className="flex-col mt-1 items-start w-80">
                  {tabItems.map((item, index) => (
                    <div
                      key={item.key}
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
        </div>
      </div>
    </div>
  );
}
