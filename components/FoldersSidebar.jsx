"use client";

import Icon from "./Icon.jsx";

export default function FoldersSidebar(props) {
  return (
    <div className="flex h-10 mt-3 ">
      <div className="w-7 h-7 items-center justify-center">
        <Icon
          src={props.startIconSrc}
          width={props.StartIconWidth}
          height={props.StartIconHeight}
          class={props.startIconClass}
        />
      </div>
      <h1 className={props.contentClass}>{props.content}</h1>
      <Icon
        src={props.endIconSrc}
        width={props.endIconWidth}
        height={props.endIconHeight}
        class={props.endIconClass}
      />
    </div>
  );
}
