"use client";

import { Image } from "@heroui/react";
export default function SettingsComponent() {
  return (
    <div className="flex h-6 mt-2 mb-3">
      <Image
        className=""
        alt="HeroUI hero Image"
        src="/assets/settings3.png"
        width={20}
        height={20}
      />
      <p className="text-neutral-500 ml-2 text-xs">Settings</p>
    </div>
  );
}
