"use client";

import { Button } from "@heroui/react";

export default function ProButton(props) {
  return (
    <div className="">
      <Button
        className={props.className}
        radius="sm"
        color="primary"
        variant="solid"
        size="sm"
      >
        {props.content}
      </Button>
    </div>
  );
}
