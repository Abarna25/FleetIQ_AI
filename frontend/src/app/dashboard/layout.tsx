"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Placeholder */}
        <header className="h-16 bg-card border-b flex items-center justify-end px-6 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            <div className="text-sm font-medium">Admin User</div>
          </div>
        </header>
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
