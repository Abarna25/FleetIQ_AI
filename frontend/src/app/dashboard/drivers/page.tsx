"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, Search, Plus, Star, Phone, Mail } from "lucide-react";

const DRIVERS = [
  { id: "D-201", name: "John Doe", email: "john.d@fleetiq.com", phone: "+1 555-0123", score: 98, status: "Active", trips: 142, avatar: "JD" },
  { id: "D-202", name: "Sarah Smith", email: "sarah.s@fleetiq.com", phone: "+1 555-0124", score: 95, status: "Active", trips: 89, avatar: "SS" },
  { id: "D-203", name: "Michael Chen", email: "michael.c@fleetiq.com", phone: "+1 555-0125", score: 88, status: "Active", trips: 210, avatar: "MC" },
  { id: "D-204", name: "Emma Wilson", email: "emma.w@fleetiq.com", phone: "+1 555-0126", score: 99, status: "On Leave", trips: 320, avatar: "EW" },
  { id: "D-205", name: "James Davis", email: "james.d@fleetiq.com", phone: "+1 555-0127", score: 76, status: "Suspended", trips: 45, avatar: "JD" },
  { id: "D-206", name: "Lisa Taylor", email: "lisa.t@fleetiq.com", phone: "+1 555-0128", score: 92, status: "Active", trips: 175, avatar: "LT" },
];

export default function DriversPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Driver Management</h1>
          <p className="text-muted-foreground mt-1">Manage driver profiles, licenses, and safety scores.</p>
        </div>
        <Button className="rounded-full shadow-md shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" /> Add Driver
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search drivers by name or ID..." className="pl-9 bg-slate-50 dark:bg-slate-900/50" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DRIVERS.map((driver) => (
          <Card key={driver.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
            <CardHeader className="flex flex-row items-start gap-4 p-5 bg-slate-50/50 dark:bg-slate-900/25 border-b">
              <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">{driver.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg truncate">{driver.name}</h3>
                <p className="text-sm text-muted-foreground font-mono">{driver.id}</p>
              </div>
              <Badge variant={
                driver.status === 'Active' ? 'default' : 
                driver.status === 'Suspended' ? 'destructive' : 'secondary'
              } className={driver.status === 'Active' ? 'bg-success hover:bg-success/80 text-white' : ''}>
                {driver.status}
              </Badge>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="truncate">{driver.email}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{driver.phone}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">AI Safety Score</p>
                  <div className="flex items-center gap-1 font-bold text-lg">
                    {driver.score} <span className="text-muted-foreground text-sm font-normal">/ 100</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1 text-right">Total Trips</p>
                  <div className="font-bold text-lg text-right">{driver.trips}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
