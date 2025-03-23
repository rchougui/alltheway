"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Alltheway" width={205} height={24} />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
        <Link href="/">Home</Link>
        <Link href="#">How it works</Link>
        <Link href="#">Help & support</Link>
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        {/* Language selector */}
        <div className="hidden md:flex items-center text-sm text-gray-700 cursor-pointer">
          🇬🇧 EN <ChevronDown className="w-4 h-4 ml-1" />
        </div>

        {/* Account */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden md:flex gap-1 text-gray-700"
        >
          <User className="w-4 h-4" />
          Account
        </Button>

        {/* For Business */}
        <Button className="text-sm px-4 rounded-full">For Business</Button>

        {/* Mobile Menu (optional) */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
