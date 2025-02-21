"use client";

import { Avatar } from "@heroui/react";

export default function AvatarImage1(props) {
  return (
    <div className="">
      <Avatar
        className="ml-2 mt-0.5"
        size="sm"
        src={props.src}
      />
    </div>
  );
}
