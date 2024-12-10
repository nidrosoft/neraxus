import { routes } from "@/config/routes";
import { SidebarItem } from "../sidebar-item";

export function SidebarNav() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-none px-3">
      <nav className="space-y-1">
        {routes.map((section, index) => (
          <div key={`section-${index}`} className="space-y-1">
            {section.items.map((route) => (
              <SidebarItem key={route.href} {...route} />
            ))}
            {section.divider && (
              <div className="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}