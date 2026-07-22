"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Map, Clock, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">FleetIQ AI</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#analytics" className="hover:text-primary transition-colors">Analytics</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Log in</Link>
            <Button className="rounded-full shadow-lg shadow-primary/20">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight"
            >
              Drive Smarter. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Predict Earlier.</span> Operate Better.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The intelligent fleet management and predictive vehicle intelligence platform designed for the modern enterprise.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-xl shadow-primary/25 group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base">
                Book a Demo
              </Button>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-20 relative mx-auto max-w-5xl"
            >
              <div className="rounded-2xl border bg-card shadow-2xl p-2 md:p-4 bg-white/50 backdrop-blur-xl">
                <div className="aspect-[16/9] rounded-xl bg-slate-100 dark:bg-slate-800 border overflow-hidden relative flex items-center justify-center">
                   {/* Placeholder for actual dashboard image */}
                   <div className="text-muted-foreground flex flex-col items-center">
                     <BarChart3 className="w-16 h-16 mb-4 opacity-50" />
                     <p className="font-medium">Interactive Dashboard Preview</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Enterprise-Grade Fleet Intelligence</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Everything you need to manage vehicles, drivers, and maintenance efficiently.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: ShieldCheck, title: "Predictive Maintenance", desc: "AI-driven insights to predict vehicle failures before they happen." },
                { icon: Map, title: "Real-time GPS Tracking", desc: "Monitor your entire fleet with live Mapbox integration and geofencing." },
                { icon: Clock, title: "Route Optimization", desc: "Save fuel and time with AI-powered optimal route recommendations." },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-card p-8 rounded-3xl shadow-sm border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-white">
            <Zap className="w-6 h-6" />
            <span className="font-bold text-xl">FleetIQ AI</span>
          </div>
          <p className="text-sm">© 2026 FleetIQ AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
