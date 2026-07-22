"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Car, 
  Users, 
  Map as MapIcon, 
  Wrench, 
  FileText, 
  Bell, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Vehicles", href: "/dashboard/vehicles", icon: Car },
  { name: "Drivers", href: "/dashboard/drivers", icon: Users },
  { name: "GPS Tracking", href: "/dashboard/tracking", icon: MapIcon },
  { name: "Maintenance", href: "/dashboard/maintenance", icon: Wrench },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="h-screen bg-card border-r flex flex-col relative z-20 transition-all duration-300"
    >
      <div className="h-16 flex items-center justify-between px-4 border-b">
        <Link href="/dashboard" className="flex items-center gap-2 overflow-hidden">
          <div className="min-w-8 w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && <span className="font-bold tracking-tight text-lg whitespace-nowrap">FleetIQ AI</span>}
        </Link>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-5 bg-card border rounded-full p-0.5 text-muted-foreground hover:text-foreground shadow-sm"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group cursor-pointer",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground"
              )}>
                <item.icon className={cn("w-5 h-5 min-w-5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                {!isCollapsed && <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <Link href="/">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all cursor-pointer">
            <LogOut className="w-5 h-5 min-w-5" />
            {!isCollapsed && <span className="font-medium text-sm whitespace-nowrap">Log out</span>}
          </div>
        </Link>
      </div>
    </motion.aside>
  );
}
