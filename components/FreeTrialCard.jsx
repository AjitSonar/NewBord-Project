"use client";

import ProButton from "./ProButton";
import Icon from "./Icon";

export default function FreeTrialCard(props) {
  return (
    <div className="flex flex-col rounded-lg bg-gradient-to-b from-violet-50 to-violet-100  w-[230px] gap-1 -ml-2">
      <div className="flex h-6 ml-1 mt-1">
        <div>
          <Icon
            src={props.src}
            width={props.width}
            height={props.height}
            class={props.class}
          />
        </div>
        <p className={props.textClass}>{props.text}</p>
      </div>

      <div className="h-10">
        <ProButton
          className="w-24 h-7 ml-2 text-[10px]"
          content="Upgrade to Pro"
        />
      </div>
    </div>
  );
}
