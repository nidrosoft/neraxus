import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialLinks, legalLinks } from "@/config/routes";

export function SidebarFooter() {
  return (
    <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-700">
      <div className="flex items-center justify-center gap-4 mb-4">
        {socialLinks.map((social, index) => (
          <Link
            key={`social-${index}`}
            href={social.href}
            className={cn("hover:opacity-75 transition", social.color)}
          >
            <social.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 text-sm text-zinc-500">
        {legalLinks.map((link, index) => (
          <div key={`legal-${link.href}`} className="flex items-center">
            <Link
              href={link.href}
              className="hover:text-zinc-800 dark:hover:text-zinc-300 transition"
            >
              {link.label}
            </Link>
            {index < legalLinks.length - 1 && (
              <span className="mx-3 text-zinc-300 dark:text-zinc-700">•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}