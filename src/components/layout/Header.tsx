"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, Search } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  onSearch: () => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hintRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!hintRef.current) return;
    const mac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
    hintRef.current.textContent = mac ? "⌘K" : "Ctrl+K";
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header className="instrument-bar fixed top-0 right-0 left-0 z-50">
        <nav
          className="flex h-14 items-center justify-between gap-4 px-4 lg:px-6"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Kenla Systems home"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={140}
              height={50}
              className="h-9 w-auto"
              priority
            />
            <span className="font-heading hidden truncate text-[17px] font-extrabold tracking-tight text-dark sm:inline">
              {COMPANY_NAME}
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onSearch}
              className="instrument-search hidden items-center gap-2.5 rounded-md px-2 py-1.5 sm:flex lg:px-2.5"
              aria-label="Open search"
            >
              <span className="instrument-search-icon" aria-hidden="true">
                <Search className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0 flex-1 text-left text-[13px] font-semibold text-warm-700">
                <span className="lg:hidden">Search</span>
                <span className="hidden lg:inline">Search the studio…</span>
              </span>
              <kbd ref={hintRef} className="instrument-kbd">
                ⌘K
              </kbd>
            </button>
            <Link
              href="/contact"
              className="brand-gradient-bg hidden items-center gap-1 rounded-md px-4 py-2 text-[14px] font-bold text-white shadow-sm sm:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={onSearch}
              className="instrument-search-mobile sm:hidden"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="instrument-search-mobile lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSearch={onSearch}
      />
    </>
  );
}
