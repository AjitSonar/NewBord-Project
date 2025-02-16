"use client";

import FreeTrialCard from "./FreeTrialCard";
import ChromeExtensionCard from "./ChromeExtensionCard";

export default function SidebarFooter() {
  return (
    <div className="absolute bottom-1 left-0">
      <FreeTrialCard />

      <ChromeExtensionCard />
    </div>
  );
}
