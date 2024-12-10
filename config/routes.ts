import {
  Home,
  FileText,
  Image as ImageIcon,
  Video,
  BarChart2,
  Library,
  Wallet,
  CreditCard,
  Sparkles,
  Crown,
  Key,
  Settings,
  HelpCircle,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
  MessageSquare,
} from "lucide-react";

export interface Route {
  label: string;
  icon: any;
  href: string;
  color: string;
}

export interface RouteSection {
  items: Route[];
  divider?: boolean;
}

export const routes: RouteSection[] = [
  {
    items: [
      {
        label: "Home",
        icon: Home,
        href: "/dashboard",
        color: "text-blue-500",
      },
      {
        label: "Article Generation",
        icon: FileText,
        href: "/article-generation",
        color: "text-violet-500",
      },
      {
        label: "Image Creation",
        icon: ImageIcon,
        href: "/image-creation",
        color: "text-pink-500",
      },
      {
        label: "Video Creation",
        icon: Video,
        href: "/video-creation",
        color: "text-teal-500",
      },
    ],
    divider: true,
  },
  {
    items: [
      {
        label: "Analytics",
        icon: BarChart2,
        href: "/analytics",
        color: "text-green-500",
      },
      {
        label: "Library",
        icon: Library,
        href: "/library",
        color: "text-amber-500",
      },
      {
        label: "My Wallet",
        icon: Wallet,
        href: "/wallet",
        color: "text-purple-500",
      },
      {
        label: "Subscription",
        icon: CreditCard,
        href: "/subscription",
        color: "text-blue-500",
      },
    ],
    divider: true,
  },
  {
    items: [
      {
        label: "What's New",
        icon: Sparkles,
        href: "/whats-new",
        color: "text-cyan-500",
      },
      {
        label: "Premium Plans",
        icon: Crown,
        href: "/premium",
        color: "text-amber-500",
      },
      {
        label: "API Access",
        icon: Key,
        href: "/api-access",
        color: "text-emerald-500",
      },
      {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-fuchsia-500",
      },
      {
        label: "FAQ & Help",
        icon: HelpCircle,
        href: "/help",
        color: "text-rose-500",
      },
    ],
    divider: true,
  },
] as const;

export const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    color: "text-blue-600",
  },
  {
    icon: Instagram,
    href: "#",
    color: "text-pink-600",
  },
  {
    icon: MessageCircle,
    href: "#",
    color: "text-purple-600",
  },
  {
    icon: Youtube,
    href: "#",
    color: "text-red-600",
  },
  {
    icon: MessageSquare,
    href: "#",
    color: "text-green-600",
  },
];

export const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "DMCA", href: "/dmca" },
  { label: "Affiliates", href: "/affiliates" },
];