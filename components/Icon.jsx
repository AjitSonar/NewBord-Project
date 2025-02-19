"use client";

import { Image } from "@heroui/react";

export default function Icon(props) {
  return (
    <div className="mt-2">
      <Image
        alt="HeroUI hero Image"
        src={props.src}
        width={props.width}
        height={props.height}
        className={props.class}  
        radius={props.radius}
      />
    </div>
  );
}
