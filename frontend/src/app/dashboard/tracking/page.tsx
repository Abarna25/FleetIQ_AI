"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Map, Navigation2, Search, Clock, MapPin, Truck, Plus } from "lucide-react";

const ACTIVE_ROUTES = [
  { id: "TRP-801", vehicle: "Ford Transit (CA-XYZ-123)", driver: "John Doe", status: "On Route", eta: "14 mins", location: "Downtown Central" },
  { id: "TRP-802", vehicle: "Volvo VNL (TX-123-456)", driver: "Emma Wilson", status: "Delayed", eta: "45 mins", location: "Interstate 45 North" },
  { id: "TRP-803", vehicle: "Mercedes Sprinter (NY-ABC-789)", driver: "Sarah Smith", status: "Arriving Soon", eta: "2 mins", location: "Warehouse B Loading Dock" },
];

export default function TrackingPage() {
  return (
    <div className="space-y-6 h-full flex flex-col max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live GPS Tracking</h1>
          <p className="text-muted-foreground mt-1">Real-time vehicle movement and route monitoring.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shadow-sm">Geofencing</Button>
          <Button className="shadow-sm shadow-primary/20">Optimize Routes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-[600px]">
        {/* Sidebar for Active Routes */}
        <div className="col-span-1 lg:col-span-1 space-y-4 flex flex-col h-full">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search vehicles or drivers..." className="pl-9 bg-card" />
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {ACTIVE_ROUTES.map((route) => (
              <Card key={route.id} className="border-border/50 shadow-sm hover:border-primary/50 cursor-pointer transition-colors">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className={
                      route.status === 'On Route' ? 'bg-primary/10 text-primary' : 
                      route.status === 'Delayed' ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success'
                    }>
                      {route.status}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">{route.id}</span>
                  </div>
                  <h4 className="font-bold text-sm line-clamp-1">{route.vehicle}</h4>
                  <div className="text-xs text-muted-foreground flex items-center mt-1">
                    <Truck className="w-3 h-3 mr-1" /> {route.driver}
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-xs">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                      <span className="truncate">{route.location}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Clock className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                      <span className="font-medium text-foreground">ETA: {route.eta}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mock Map Area */}
        <Card className="col-span-1 lg:col-span-3 shadow-sm border-border/50 overflow-hidden relative">
          {/* Abstract Map Background Simulation */}
          <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 overflow-hidden">
             {/* Map Grid Pattern */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             
             {/* Abstract Routes */}
             <svg className="absolute inset-0 w-full h-full opacity-50 stroke-primary/30" fill="none" strokeWidth="4">
               <path d="M 100,100 C 200,300 400,100 600,400 S 800,200 900,500" strokeDasharray="8 8" />
               <path d="M 200,500 C 300,400 500,600 700,200 S 800,100 950,300" strokeDasharray="8 8" className="stroke-blue-400/30" />
             </svg>
             
             {/* Vehicle Markers */}
             <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                 <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute -inset-2" />
                 <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                   <Navigation2 className="w-4 h-4" />
                 </div>
                 <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-popover border shadow-md text-xs py-1 px-2 rounded-md whitespace-nowrap font-medium z-20">
                   TRP-801
                 </div>
               </div>
             </div>

             <div className="absolute top-[20%] left-[70%] -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                 <div className="w-8 h-8 bg-destructive text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                   <Navigation2 className="w-4 h-4" />
                 </div>
                 <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-popover border shadow-md text-xs py-1 px-2 rounded-md whitespace-nowrap font-medium z-20">
                   TRP-802
                 </div>
               </div>
             </div>

             {/* UI Overlay Controls */}
             <div className="absolute top-4 right-4 flex flex-col gap-2">
               <Button size="icon" variant="secondary" className="shadow-md rounded-full"><Map className="w-4 h-4" /></Button>
               <Button size="icon" variant="secondary" className="shadow-md rounded-full"><Plus className="w-4 h-4" /></Button>
               <Button size="icon" variant="secondary" className="shadow-md rounded-full"><div className="w-4 h-2 border-b-2 border-foreground" /></Button>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
