"use client";

import { Image } from "@heroui/react";
export default function WebDesignComp() {
  return (
    <div className="flex bg-slate-100 h-9 rounded-lg -ml-3">
      <div className="py-2 items-center justify-center">
        <Image
          className="ml-3 rounded-none"
          alt="HeroUI hero Image"
          src="/assets/anger-symbol3.png"
          width={20}
          height={20}
        />
      </div>
      <h1 className="font-bold py-3 ml-5 text-xs">Website Design</h1>
      <div className="bg-slate-200 mt-1.5 ml-12 rounded-full w-6 h-6">
        <p className="ml-1 text-xs mt-1">24</p>
      </div>
    </div>
  );
}
