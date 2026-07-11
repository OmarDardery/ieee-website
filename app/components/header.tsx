"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { societies } from "../societies-data";

const navItems = [
  { label: "Events", href: "/events" },
  ...societies.map((society) => ({
    label: society.name,
    href: `/societies/${society.slug}`,
  })),
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex w-full justify-center px-3 py-3 sm:px-4">
        <div className="w-full max-w-6xl rounded-2xl border border-blue-100/60 bg-white/80 px-4 py-3 text-blue-500 shadow-lg shadow-blue-100/40 backdrop-blur-md sm:px-5">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight transition hover:text-blue-700 sm:text-3xl"
            >
              IEEE EUI
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 text-xs font-semibold md:flex md:text-sm">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full border px-3 py-1 transition ${
                      isActive
                        ? "border-blue-400 bg-blue-50 text-blue-700"
                        : "border-blue-200 bg-white/80 text-blue-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-600 transition hover:border-blue-400 hover:bg-blue-50 md:hidden"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <nav className="mt-3 flex flex-col gap-1 border-t border-blue-100 pt-3 md:hidden">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>
      <div className="h-20" />
    </>
  );
}

export default Header;
