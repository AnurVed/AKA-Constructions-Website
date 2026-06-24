"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { company, navItems } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--background)]/90 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-5">
        <Link href="/" className="focus-ring flex items-center gap-3" aria-label="A.K.A Constructions home">
          <span className="grid h-11 w-11 place-items-center rounded-sm bg-[color:var(--navy)] text-[color:var(--gold)]">
            <Building2 size={25} aria-hidden="true" />
          </span>
          <span>
            <span className="block font-[var(--font-manrope)] text-lg font-extrabold leading-none">
              {company.name}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Mohali, Punjab
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "focus-ring rounded-sm px-4 py-3 text-sm font-bold transition hover:text-[color:var(--gold)]",
                pathname === item.href ? "text-[color:var(--gold)]" : "text-[color:var(--foreground)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded-sm border border-[color:var(--line)] text-[color:var(--foreground)] transition hover:border-[color:var(--gold)]"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <Link
            href="/contact"
            className="focus-ring hidden min-h-11 items-center rounded-sm bg-[color:var(--gold)] px-4 text-sm font-extrabold text-[#071a33] transition hover:bg-[#e2b24e] sm:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-sm border border-[color:var(--line)] lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--background)] lg:hidden">
          <nav className="container-shell grid gap-2 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-sm px-3 py-3 text-base font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
