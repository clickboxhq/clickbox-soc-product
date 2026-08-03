import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutGrid,
  ShieldAlert,
  Bell,
  Inbox,
  ListTree,
  UserRound,
  MonitorSmartphone,
  Mail,
  Radar,
  Search,
  Library,
  GraduationCap,
  Award,
  BarChart3,
  FileText,
  Presentation,
  Building2,
  Settings as SettingsIcon,
  CircleUserRound,
  CreditCard,
  BookOpen,
  LifeBuoy,
  HardDrive,
  ChevronsUpDown,
  Command,
  Bell as BellIcon,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Kbd } from "@/components/soc/primitives";
import { CommandPalette, useCommandPalette } from "@/components/soc/command-palette";
import { PageTransition } from "@/components/soc/ui/motion";

type NavItem = { to: string; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string };

const primary: NavItem[] = [
  { to: "/app", label: "Dashboard", icon: LayoutGrid },
  { to: "/app/investigations", label: "Investigations", icon: ShieldAlert, badge: "12" },
  { to: "/app/alerts", label: "Alerts", icon: Bell, badge: "48" },
  { to: "/app/incidents", label: "Incident Queue", icon: Inbox, badge: "5" },
  { to: "/app/timeline", label: "Global Timeline", icon: ListTree },
  { to: "/app/identity", label: "Identity Center", icon: UserRound },
  { to: "/app/endpoints", label: "Endpoint Center", icon: MonitorSmartphone },
  { to: "/app/email", label: "Email Investigations", icon: Mail },
  { to: "/app/threat-intel", label: "Threat Intelligence", icon: Radar },
  { to: "/app/search", label: "Global Search", icon: Search },
];

const learning: NavItem[] = [
  { to: "/app/scenarios", label: "Scenario Library", icon: Library },
  { to: "/app/learning", label: "Learning Center", icon: GraduationCap },
  { to: "/app/certificates", label: "Certificates", icon: Award },
];

const admin: NavItem[] = [
  { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/app/reports", label: "Reports", icon: FileText },
  { to: "/app/instructor", label: "Instructor Portal", icon: Presentation },
  { to: "/app/organizations", label: "Organizations", icon: Building2 },
  { to: "/app/settings", label: "Settings", icon: SettingsIcon },
  { to: "/app/profile", label: "Profile", icon: CircleUserRound },
];

function NavGroup({ label, items }: { label?: string; items: NavItem[] }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="px-2">
      {label && (
        <div className="mb-1 px-2 pt-4 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
      )}
      <ul className="flex flex-col gap-0.5">
        {items.map((it) => {
          const active =
            it.to === "/app" ? path === "/app" : path.startsWith(it.to);
          const Icon = it.icon;
          return (
            <li key={it.to}>
              <Link
                to={it.to}
                className={cn(
                  "group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13px] transition-colors",
                  active
                    ? "bg-sidebar-accent text-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                )}
              >
                <Icon
                  className={cn(
                    "size-4 shrink-0",
                    active ? "text-[color:var(--info)]" : "text-muted-foreground group-hover:text-secondary",
                  )}
                />
                <span className="flex-1 truncate">{it.label}</span>
                {it.badge && (
                  <span className="rounded border border-border bg-background/60 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-secondary">
                    {it.badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-[248px] shrink-0 border-r border-sidebar-border bg-sidebar lg:flex lg:flex-col">
      {/* Workspace switcher */}
      <div className="p-3">
        <button className="flex w-full items-center gap-2.5 rounded-md border border-sidebar-border bg-background/40 px-2.5 py-2 text-left transition-colors hover:bg-sidebar-accent/50">
          <div className="flex size-7 items-center justify-center rounded-md bg-[color:var(--info)]/15 text-[color:var(--info)]">
            <ShieldAlert className="size-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-medium">Contoso Global SOC</div>
            <div className="truncate text-[10px] text-muted-foreground">Enterprise · EU-West</div>
          </div>
          <ChevronsUpDown className="size-3.5 text-muted-foreground" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto pb-4">
        <NavGroup items={primary} />
        <NavGroup label="Learning" items={learning} />
        <NavGroup label="Administration" items={admin} />
      </nav>

      {/* Footer: subscription + storage */}
      <div className="border-t border-sidebar-border p-3">
        <div className="rounded-lg border border-sidebar-border bg-background/40 p-3">
          <div className="flex items-center gap-2 text-[11px] text-secondary">
            <Sparkles className="size-3.5 text-[color:var(--info)]" />
            <span className="font-medium text-foreground">Enterprise Plan</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Storage</span>
            <span className="tabular-nums">184 / 500 GB</span>
          </div>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-background">
            <div className="h-full w-[36%] rounded-full bg-[color:var(--info)]" />
          </div>
          <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground">
              <BookOpen className="size-3.5" /> Docs
            </a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground">
              <LifeBuoy className="size-3.5" /> Support
            </a>
            <a href="#" className="ml-auto inline-flex items-center gap-1 hover:text-foreground">
              <CreditCard className="size-3.5" /> Billing
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ crumb, onOpenPalette }: { crumb: string; onOpenPalette: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">ClickBox</span>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium">{crumb}</span>
      </div>
      <div className="ml-4 flex flex-1 items-center">
        <button
          onClick={onOpenPalette}
          className="group flex h-9 w-full max-w-md items-center gap-2 rounded-md border border-border bg-card px-3 text-[13px] text-muted-foreground transition-colors hover:border-[color:var(--info)]/50"
        >
          <Search className="size-4" />
          <span className="flex-1 text-left">Search users, devices, alerts, MITRE IDs…</span>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenPalette}
          className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-2.5 text-[12px] text-secondary hover:text-foreground"
        >
          <Command className="size-4" />
          <span className="hidden md:inline">Command</span>
        </button>
        <button className="relative inline-flex size-9 items-center justify-center rounded-md border border-border bg-card text-secondary hover:text-foreground">
          <BellIcon className="size-4" />
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[color:var(--critical)]" />
        </button>
        <div className="flex items-center gap-2 rounded-md border border-border bg-card py-1 pl-1 pr-2.5">
          <div className="grid size-7 place-items-center rounded bg-[color:var(--info)]/15 text-[11px] font-semibold text-[color:var(--info)]">
            JD
          </div>
          <div className="hidden text-left leading-tight md:block">
            <div className="text-[12px] font-medium">John Doe</div>
            <div className="text-[10px] text-muted-foreground">Tier 3 · SOC</div>
          </div>
        </div>
      </div>
    </header>
  );
}

const crumbMap: Record<string, string> = {
  "/app": "Dashboard",
  "/app/alerts": "Alerts",
  "/app/incidents": "Incident Queue",
  "/app/timeline": "Global Timeline",
  "/app/investigations": "Investigations",
  "/app/identity": "Identity Center",
  "/app/endpoints": "Endpoint Center",
  "/app/email": "Email Investigations",
  "/app/threat-intel": "Threat Intelligence",
  "/app/search": "Global Search",
  "/app/scenarios": "Scenario Library",
  "/app/learning": "Learning Center",
  "/app/certificates": "Certificates",
  "/app/analytics": "Analytics",
  "/app/reports": "Reports",
  "/app/instructor": "Instructor Portal",
  "/app/organizations": "Organizations",
  "/app/settings": "Settings",
  "/app/profile": "Profile",
};

export function AppShell({ children }: { children?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const crumb =
    crumbMap[path] ??
    (path.startsWith("/app/investigations/") ? "Investigation" : path.startsWith("/app/cases/") ? "Case Management" : "Dashboard");
  const { open, setOpen } = useCommandPalette();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar crumb={crumb} onOpenPalette={() => setOpen(true)} />
        <main className="flex-1 overflow-x-hidden">
          <PageTransition>{children ?? <Outlet />}</PageTransition>
        </main>
      </div>
      <CommandPalette open={open} onOpenChange={setOpen} />
    </div>
  );
}
