"use client";

import Icon from "./Icon.jsx";
import { Card, CardHeader } from "@heroui/react";

export default function CardModule(props) {
  return (
    <div className="items-start mt-3">
      <Card className="w-[282px] h-[54px] shadow-none border-1 -ml-2 rounded-lg">
        <CardHeader className="flex h-12 gap-x-2 -ml-1">
          <Icon
            src={props.src}
            width={props.width}
            height={props.height}
            class={props.class}
          />
          <div className="flex flex-col">
            <p className={props.textClass}>{props.text}</p>
            <p className={props.boldTextClass}>{props.boldText}</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
