"use client";

import { Divider } from "@heroui/divider";
import FrameLogo from "./FrameLogo.jsx";
import AHComponent from "./AHComponent.jsx";
import InboxComponent from "./InboxComponent.jsx";
import SettingsComponent from "./SettingsComponent.jsx";
import BrandComponent from "./BrandComponent.jsx";
import WebDesignComp from "./WebDesignComp.jsx";
import MobileDesignComp from "./MobileDesignComp.jsx";
import YellowFolder from "./YellowFolder.jsx";
import RedFolder from "./RedFolder.jsx";

export default function SidebarHeader() {
  return (
    <div className="flex flex-col h-full relative">
      <FrameLogo />

      <AHComponent />

      <InboxComponent />

      <SettingsComponent />

      <Divider />

      <BrandComponent />

      <WebDesignComp />

      <MobileDesignComp />

      <YellowFolder />

      <RedFolder />
    </div>
  );
}
