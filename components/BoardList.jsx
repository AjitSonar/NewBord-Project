"use client";

import SocialMedia from "./SocialMedia";
import Personal from "./Personal";
import Trending from "./Trending";
import MyFavorites from "./MyFavorites";

export default function BoardList() {
  return (
    <div className="flex px-2 flex-wrap">
      <SocialMedia />
      <Personal />
      <Trending />
      <MyFavorites />
    </div>
  );
}
