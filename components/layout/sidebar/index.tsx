import { memo } from "react";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav } from "./sidebar-nav";
import { SidebarFooter } from "./sidebar-footer";

function SidebarComponent() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r">
      <SidebarHeader />
      <SidebarNav />
      <SidebarFooter />
    </div>
  );
}

export const Sidebar = memo(SidebarComponent);