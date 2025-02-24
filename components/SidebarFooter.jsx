"use client";

import FreeTrialCard from "./FreeTrialCard";
import CardModule from "./CardModule";

export default function SidebarFooter() {
  return (
    <div className="absolute w-[282px] h-[155px] justify-end flex-col bottom-3 left-0">
      {/* Free Trial Card */}

      <FreeTrialCard
        src="/assets/clock3.png"
        width="16px"
        height="16px"
        class="ml-1 -mt-0.5"
        text="Free trials ends in 7 days!"
        textClass="text-[14px] mt-1 ml-2"
      />

      {/* Chrome Extension Card  */}

      <CardModule
        src="/assets/chrome3.png"
        width="28px"
        height="28px"
        class="-mt-2"
        text="Install from"
        textClass="text-[12px] text-black"
        boldText="Chrome Extension Store"
        boldTextClass="text-[14px] font-bold"
      />
    </div>
  );
}
