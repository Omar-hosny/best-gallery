"use client";

import Link from "next/link";
import { Camera, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-black/70 supports-backdrop-filter:bg-white/60 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
              <Camera size={20} className="stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              BestGallery
            </span>
          </Link>

          {/* Search Bar - Hidden on small mobile */}
          <div className="hidden max-w-md flex-1 md:flex">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search collection..."
                className="w-full rounded-full bg-secondary/50 pl-9 border-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Explore
              </Link>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block"></div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5 md:hidden" />
            </Button>
            <Button className="rounded-full" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
