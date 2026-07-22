"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Search, Plus, Download, FileArchive, ShieldAlert, CheckCircle } from "lucide-react";

const DOCUMENTS = [
  { id: "DOC-001", name: "Vehicle Insurance - CA-XYZ-123", type: "Insurance", entity: "Ford Transit", expiry: "2026-10-15", status: "Valid" },
  { id: "DOC-002", name: "Driver License - John Doe", type: "License", entity: "John Doe", expiry: "2027-02-28", status: "Valid" },
  { id: "DOC-003", name: "Registration - NY-ABC-789", type: "Registration", entity: "Mercedes Sprinter", expiry: "2025-11-01", status: "Expiring Soon" },
  { id: "DOC-004", name: "Medical Certificate - Sarah", type: "Medical", entity: "Sarah Smith", expiry: "2024-05-12", status: "Expired" },
  { id: "DOC-005", name: "Emissions Test - TX-123", type: "PUC", entity: "Volvo VNL", expiry: "2026-08-22", status: "Valid" },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Center</h1>
          <p className="text-muted-foreground mt-1">Manage insurance, registrations, and permits across your fleet.</p>
        </div>
        <Button className="rounded-full shadow-md shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" /> Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-primary/5 border-primary/20 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FileArchive className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Documents</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-success/5 border-success/20 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Valid</p>
              <p className="text-2xl font-bold">1,180</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-warning/5 border-warning/20 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Expiring Soon</p>
              <p className="text-2xl font-bold">45</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-destructive/5 border-destructive/20 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Expired</p>
              <p className="text-2xl font-bold">23</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 shadow-sm">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
          <CardTitle className="text-lg">File Vault</CardTitle>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents..." className="pl-9 bg-slate-50 dark:bg-slate-900/50" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
              <TableRow>
                <TableHead className="pl-6">Document Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Related Entity</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-6">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DOCUMENTS.map((doc) => (
                <TableRow key={doc.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/25">
                  <TableCell className="pl-6 font-medium flex items-center gap-3">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    {doc.name}
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.entity}</TableCell>
                  <TableCell className="font-mono text-sm">{doc.expiry}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      doc.status === 'Valid' ? 'border-success text-success' :
                      doc.status === 'Expiring Soon' ? 'border-warning text-warning' : 'border-destructive text-destructive'
                    }>
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
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
