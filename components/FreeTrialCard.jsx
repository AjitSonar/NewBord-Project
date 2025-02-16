"use client";

import { Image } from "@heroui/react";
import UpgradeToProButton from "./UpgradeToProButton";

export default function FreeTrialCard() {
  return (
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
        <p className="text-[10px] mt-1 ml-2"> Free trials ends in 7 days!</p>
      </div>

      <div className="h-10">
        <UpgradeToProButton />
      </div>
    </div>
  );
}
