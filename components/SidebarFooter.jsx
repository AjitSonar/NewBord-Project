"use client";

import { Image } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";

export default function SidebarFooter() {
  return (
      <div className="absolute bottom-1 left-0">

        <div className="flex flex-col rounded-lg bg-gradient-to-b from-violet-50 to-violet-100  w-[230px] gap-1 -ml-2">
          <div className="flex h-6 ml-1 mt-1">
            <div>
              <Image
                className="ml-1 mt-1"
                alt="HeroUI hero Image"
                src="/assets/clock3.png"
                width={12}
                height={12}
              />
            </div>
            <p className="text-[10px] mt-1 ml-2">
              {" "}
              Free trials ends in 7 days!
            </p>
          </div>
          <div className="h-10">
            <Button
              className="w-24 h-7 ml-2 text-[10px]"
              radius="sm"
              color="primary"
              variant="solid"
              size="sm"
            >
              Upgrade to Pro
            </Button>
          </div>
        </div>

        <div className="items-start mt-3">
          <Card className="w-[230px] shadow-none border-1 -ml-2 rounded-lg">
            <CardHeader className="flex h-12 gap-x-2 -ml-1">
              <Image
                alt="heroui logo"
                height={25}
                radius="sm"
                src="/assets/chrome3.png"
                width={25}
              />
              <div className="flex flex-col">
                <p className="text-[10px] text-black">Install from</p>
                <p className="text-[10px] font-bold">Chrome Extension Store</p>
              </div>
            </CardHeader>
          </Card>
        </div>
        
      </div>
  );
}