"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Key, BellRing } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
          <TabsTrigger value="profile" className="flex items-center gap-2"><User className="w-4 h-4 hidden sm:block" /> Profile</TabsTrigger>
          <TabsTrigger value="organization" className="flex items-center gap-2"><Building2 className="w-4 h-4 hidden sm:block" /> Org</TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2"><BellRing className="w-4 h-4 hidden sm:block" /> Alerts</TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2"><Key className="w-4 h-4 hidden sm:block" /> Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Super" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Admin" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="admin@fleetiq.com" type="email" />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>Manage your fleet company details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orgName">Company Name</Label>
                <Input id="orgName" defaultValue="Acme Logistics" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billingEmail">Billing Email</Label>
                <Input id="billingEmail" defaultValue="billing@acme.com" type="email" />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6">
              <Button>Update Organization</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what alerts you want to receive.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Mock toggle inputs */}
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Critical Maintenance Alerts</p>
                  <p className="text-sm text-muted-foreground">Receive emails when AI predicts a high risk of failure.</p>
                </div>
                <div className="w-10 h-6 bg-primary rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="font-medium">Geofence Violations</p>
                  <p className="text-sm text-muted-foreground">Receive SMS when a vehicle leaves designated zones.</p>
                </div>
                <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>API Keys & Security</CardTitle>
              <CardDescription>Manage access tokens for external integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Mapbox Token</Label>
                <Input type="password" defaultValue="pk.eyJ1IjoiZmxlZXRpcSIsImEiOiJjb..." />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex gap-2">
               <Button variant="outline">Revoke Keys</Button>
               <Button>Update Keys</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
