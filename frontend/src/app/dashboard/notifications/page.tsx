"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Info, CheckCircle2, Navigation } from "lucide-react";

const NOTIFICATIONS = [
  { id: 1, title: "Harsh Braking Detected", description: "Driver John Doe (Ford Transit) triggered a harsh braking event on I-45.", time: "10 minutes ago", type: "danger", icon: AlertTriangle },
  { id: 2, title: "Maintenance Due", description: "Volvo VNL (TX-123-456) requires scheduled oil change.", time: "2 hours ago", type: "warning", icon: WrenchIcon },
  { id: 3, title: "Trip Completed", description: "Trip TRP-800 completed successfully by Sarah Smith.", time: "4 hours ago", type: "success", icon: CheckCircle2 },
  { id: 4, title: "Geofence Violation", description: "Mercedes Sprinter (NY-ABC-789) exited the designated delivery zone.", time: "5 hours ago", type: "danger", icon: Navigation },
  { id: 5, title: "Document Expiring", description: "Insurance for Tesla Semi (5YJSA1) expires in 15 days.", time: "1 day ago", type: "info", icon: Info },
];

function WrenchIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  );
}

export default function NotificationsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground mt-1">Review system alerts, warnings, and AI insights.</p>
        </div>
        <Button variant="outline">Mark all as read</Button>
      </div>

      <Card className="border-border/50 shadow-sm">
        <CardHeader className="border-b pb-4">
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Recent Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {NOTIFICATIONS.map((notif) => (
              <div key={notif.id} className="p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  notif.type === 'danger' ? 'bg-destructive/10 text-destructive' :
                  notif.type === 'warning' ? 'bg-warning/10 text-warning' :
                  notif.type === 'success' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                }`}>
                  <notif.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold">{notif.title}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{notif.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notif.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
