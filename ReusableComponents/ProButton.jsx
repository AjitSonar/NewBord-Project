"use client";

import { Button } from "@heroui/react";

export default function ProButton(props) {
  return (
    <div className="mt-2 ml-0.5">
      <Button
        className={props.className}
        radius="sm"
        color="primary"
        variant="solid"
        size="sm"
      >
        <p className={props.contentClass}> {props.content}</p>
      </Button>
    </div>
  );
}
