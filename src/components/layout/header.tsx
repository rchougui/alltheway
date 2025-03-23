"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between min-h-20 px-6 md:px-16 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex font-semibold">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Alltheway" width={205} height={24} />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 ">
          <Link href="/">Home</Link>
          <Link href="#">How it works</Link>
          <Link href="#">Help & support</Link>
        </nav>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        {/* Language selector */}
        <div className="hidden lg:flex items-center gap-2 cursor-pointer">
          <Image src="/flag.svg" alt="English" width={20} height={15} /> EN
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>

        {/* Account */}
        <Button
          variant="ghost"
          size="lg"
          className="hidden lg:flex gap-1 text-gray-700 font-bold"
        >
          <User className="w-4 h-4" />
          Account
        </Button>

        {/* For Business */}
        <Button
          variant="ghost"
          className="p-4 border-2 border-black rounded-xl"
        >
          For Business
        </Button>

        {/* Mobile Menu (optional) */}
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
