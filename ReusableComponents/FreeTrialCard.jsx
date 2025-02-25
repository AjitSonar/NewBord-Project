"use client";

import ProButton from "./ProButton";
import Icon from "./Icon";

export default function FreeTrialCard(props) {
  return (
    <div className="flex flex-col rounded-lg bg-gradient-to-b from-violet-50 to-violet-100 h-[89px] w-[282px] gap-1 -ml-2">
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

      <div className=" ">
        <ProButton
          className="w-[125px] h-[36px] ml-2"
          content="Upgrade to Pro"
          contentClass="text-white text-[14px] h-[17px] w-[101px]"
        />
      </div>
    </div>
  );
}
