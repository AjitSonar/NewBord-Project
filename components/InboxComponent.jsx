"use client";

import { Image } from "@heroui/react";
export default function InboxComponent() {
  return (
    <div className="flex h-6 mt-1.5">
      <Image
        className=""
        alt="HeroUI hero Image"
        src="/assets/inbox.svg"
        width={20}
        height={20}
      />
      <p className="text-neutral-500 ml-2 text-xs">Inbox</p>

      <div className="bg-slate-200 ml-28 rounded-full w-5 h-5">
        <p className="ml-1.5 text-xs mt-0.5">6</p>
      </div>
    </div>
  );
}
