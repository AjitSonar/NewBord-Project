"use client";

import { Avatar } from "@heroui/react";

export default function AvatarImage1(props) {
  return (
    <div className="">
      <Avatar
        className="ml-2 mt-1"
        size="sm"
        src={props.src}
      />
    </div>
  );
}
