"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, AlertTriangle, CheckCircle2, ChevronRight, Activity } from "lucide-react";

const MAINTENANCE_DATA = [
  { vehicle: "Ford Transit (CA-XYZ-123)", health: 82, nextService: "14 days", risk: "Low", components: { engine: 90, brakes: 65, battery: 95 } },
  { vehicle: "Mercedes Sprinter (NY-ABC-789)", health: 45, nextService: "Overdue", risk: "High", components: { engine: 40, brakes: 80, battery: 30 } },
  { vehicle: "Volvo VNL 860 (TX-123-456)", health: 92, nextService: "45 days", risk: "Low", components: { engine: 95, brakes: 90, battery: 92 } },
  { vehicle: "Ram ProMaster (FL-987-654)", health: 68, nextService: "5 days", risk: "Medium", components: { engine: 75, brakes: 55, battery: 85 } },
];

export default function MaintenancePage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Predictive Maintenance</h1>
        <p className="text-muted-foreground mt-1">AI-driven vehicle health predictions and maintenance scheduling.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary text-primary-foreground border-none shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 font-medium">Overall Fleet Health</p>
                <h2 className="text-4xl font-bold mt-2">84%</h2>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 mr-2 text-white" />
              <span>Fleet is in good condition</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground font-medium">Critical Attention Required</p>
                <h2 className="text-4xl font-bold mt-2 text-destructive">2</h2>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive hover:bg-destructive/5">
                View Critical Vehicles
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground font-medium">Upcoming Services (7 Days)</p>
                <h2 className="text-4xl font-bold mt-2 text-warning">5</h2>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-warning" />
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" size="sm" className="w-full text-warning hover:text-warning hover:bg-warning/5">
                Schedule Service
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">AI Health Predictions</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MAINTENANCE_DATA.map((item, i) => (
          <Card key={i} className="border-border/50 shadow-sm overflow-hidden">
            <div className={`h-1 w-full ${
              item.risk === 'High' ? 'bg-destructive' : 
              item.risk === 'Medium' ? 'bg-warning' : 'bg-success'
            }`} />
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.vehicle}</CardTitle>
                  <CardDescription className="mt-1">Next Service: <strong className={item.risk === 'High' ? 'text-destructive' : ''}>{item.nextService}</strong></CardDescription>
                </div>
                <Badge variant="outline" className={`
                  ${item.risk === 'High' ? 'border-destructive text-destructive' : ''}
                  ${item.risk === 'Medium' ? 'border-warning text-warning' : ''}
                  ${item.risk === 'Low' ? 'border-success text-success' : ''}
                `}>
                  {item.risk} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium">Overall AI Health Score</span>
                  <span className="font-bold">{item.health}/100</span>
                </div>
                <Progress value={item.health} className={`h-2 mb-6 ${item.health < 50 ? '[&>[data-slot=progress-indicator]]:bg-destructive' : item.health < 75 ? '[&>[data-slot=progress-indicator]]:bg-warning' : '[&>[data-slot=progress-indicator]]:bg-success'}`} />
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Engine</div>
                    <div className={`font-semibold ${item.components.engine < 50 ? 'text-destructive' : ''}`}>{item.components.engine}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Brakes</div>
                    <div className={`font-semibold ${item.components.brakes < 50 ? 'text-destructive' : ''}`}>{item.components.brakes}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Battery</div>
                    <div className={`font-semibold ${item.components.battery < 50 ? 'text-destructive' : ''}`}>{item.components.battery}%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
