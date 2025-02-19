"use client";

import FreeTrialCard from "./FreeTrialCard";
import CardModule from "./CardModule";

export default function SidebarFooter() {
  return (
    <div className="absolute bottom-1 left-0">
      {/* Free Trial Card */}

      <FreeTrialCard
        src="/assets/clock3.png"
        width={12}
        height={12}
        class="ml-1 -mt-1"
        text="Free trials ends in 7 days!"
        textClass="text-[10px] mt-1 ml-2"
      />

      {/* Chrome Extension Card  */}

      <CardModule
        src="/assets/chrome3.png"
        width={25}
        height={25}
        class=""
        text="Install from"
        textClass="text-[10px] text-black"
        boldText="Chrome Extension Store"
        boldTextClass="text-[10px] font-bold"
      />
    </div>
  );
}
