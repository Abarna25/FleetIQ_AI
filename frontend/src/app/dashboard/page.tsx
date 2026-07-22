"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Car, Activity, Wrench, Navigation, Droplet, ShieldCheck, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "Total Vehicles", value: "248", icon: Car, trend: "+12% from last month", positive: true },
    { title: "Vehicles Online", value: "192", icon: Activity, trend: "8 online since yesterday", positive: true },
    { title: "In Maintenance", value: "14", icon: Wrench, trend: "-2 from last week", positive: true },
    { title: "Active Trips", value: "86", icon: Navigation, trend: "+5% from yesterday", positive: true },
    { title: "Fuel Consumed (L)", value: "1,240", icon: Droplet, trend: "+20L than average", positive: false },
    { title: "Avg Safety Score", value: "94.2", icon: ShieldCheck, trend: "+1.2 pts this week", positive: true },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your fleet today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs mt-1 flex items-center font-medium">
                  {stat.positive ? (
                    <ArrowUpRight className="w-3 h-3 text-success mr-1" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 text-destructive mr-1" />
                  )}
                  <span className={stat.positive ? "text-success" : "text-destructive"}>
                    {stat.trend}
                  </span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="col-span-1 shadow-sm border-border/50">
            <CardHeader>
              <CardTitle>Fleet Utilization & Fuel Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-xl bg-slate-100 dark:bg-slate-900 border flex items-end px-4 pb-4 gap-2">
                 {/* Mock Bar Chart */}
                 {[40, 60, 45, 80, 55, 90, 70, 65, 85, 50, 75, 95].map((h, i) => (
                   <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-md relative group cursor-pointer" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border shadow-sm">
                        {h}k
                      </div>
                   </div>
                 ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Card className="col-span-1 shadow-sm border-border/50">
            <CardHeader>
              <CardTitle>Recent AI Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Brake Pad Wear Detected", vehicle: "Ford Transit (CA-XYZ-123)", time: "10 mins ago", type: "warning" },
                  { title: "Route Deviation Alert", vehicle: "Sprinter (NY-ABC-789)", time: "1 hour ago", type: "danger" },
                  { title: "Scheduled Maintenance Due", vehicle: "Volvo Truck (TX-123-456)", time: "3 hours ago", type: "info" },
                  { title: "Harsh Braking Incident", vehicle: "Ford Transit (CA-XYZ-123)", time: "5 hours ago", type: "danger" },
                ].map((alert, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-border cursor-pointer">
                    <div className={`w-2 h-2 mt-2 rounded-full ${
                      alert.type === 'danger' ? 'bg-destructive' : 
                      alert.type === 'warning' ? 'bg-warning' : 'bg-primary'
                    }`} />
                    <div>
                      <p className="font-medium text-sm">{alert.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{alert.vehicle}</p>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground mt-0.5">{alert.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
