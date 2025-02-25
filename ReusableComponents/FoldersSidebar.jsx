"use client";

import Icon from "./Icon.jsx";

export default function FoldersSidebar(props) {
  return (
    <div className="flex items-start py-2 justify-start rounded-lg cursor-pointer hover:bg-gray-300">
      <div className="w-7 h-7 items-center justify-center ">
        <Icon
          src={props.startIconSrc}
          width={props.StartIconWidth}
          height={props.StartIconHeight}
          class={props.startIconClass}
        />
      </div>
      <h1 className={props.contentClass}>{props.content}</h1>
    </div>
  );
}
