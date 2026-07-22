"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Car, Search, Plus, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const VEHICLES = [
  { id: "V-1001", make: "Ford", model: "Transit", year: 2022, vin: "1FTBR1EX3MKB12345", status: "Active", mileage: "45,200 km" },
  { id: "V-1002", make: "Mercedes", model: "Sprinter", year: 2023, vin: "WDFPF4CD2LN123456", status: "Maintenance", mileage: "82,100 km" },
  { id: "V-1003", make: "Volvo", model: "VNL 860", year: 2021, vin: "4V4NC9EJ9LN123456", status: "Active", mileage: "125,000 km" },
  { id: "V-1004", make: "Tesla", model: "Semi", year: 2024, vin: "5YJSA1E21LF123456", status: "Inactive", mileage: "1,200 km" },
  { id: "V-1005", make: "Ram", model: "ProMaster", year: 2022, vin: "3C6TRVDG4ME123456", status: "Active", mileage: "62,300 km" },
  { id: "V-1006", make: "Chevrolet", model: "Express", year: 2020, vin: "1GCYGGEG4L1123456", status: "Active", mileage: "98,400 km" },
];

export default function VehiclesPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vehicles Management</h1>
          <p className="text-muted-foreground mt-1">Manage your fleet vehicles, status, and details.</p>
        </div>
        <Button className="rounded-full shadow-md shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" /> Add Vehicle
        </Button>
      </div>

      <Card className="border-border/50 shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Car className="w-5 h-5 text-primary" />
            Vehicle Roster
          </CardTitle>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by VIN or Model..."
              className="pl-9 bg-slate-50 dark:bg-slate-900/50"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
              <TableRow>
                <TableHead className="pl-6">ID</TableHead>
                <TableHead>Vehicle Details</TableHead>
                <TableHead>VIN</TableHead>
                <TableHead>Mileage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {VEHICLES.map((vehicle) => (
                <TableRow key={vehicle.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/25">
                  <TableCell className="pl-6 font-medium">{vehicle.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{vehicle.make} {vehicle.model}</span>
                      <span className="text-xs text-muted-foreground">Year: {vehicle.year}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{vehicle.vin}</TableCell>
                  <TableCell>{vehicle.mileage}</TableCell>
                  <TableCell>
                    <Badge variant={
                      vehicle.status === 'Active' ? 'default' : 
                      vehicle.status === 'Maintenance' ? 'destructive' : 'secondary'
                    } className={
                      vehicle.status === 'Active' ? 'bg-success hover:bg-success/80 text-white' :
                      vehicle.status === 'Maintenance' ? 'bg-warning hover:bg-warning/80 text-white' : ''
                    }>
                      {vehicle.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Vehicle</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Schedule Maintenance</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
