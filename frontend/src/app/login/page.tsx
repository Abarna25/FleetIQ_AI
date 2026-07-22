"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tight text-xl">FleetIQ AI</span>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-card p-8 rounded-3xl shadow-xl border relative overflow-hidden">
          {/* Glass effect gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400" />
          
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome back</h1>
            <p className="text-muted-foreground text-sm">Enter your credentials to access your fleet.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@fleetiq.com" 
                className="h-12 bg-slate-50/50 dark:bg-slate-900/50"
                required 
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="h-12 bg-slate-50/50 dark:bg-slate-900/50"
                required 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl text-base shadow-lg shadow-primary/20"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account? <Link href="#" className="text-primary font-medium hover:underline">Contact Sales</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
