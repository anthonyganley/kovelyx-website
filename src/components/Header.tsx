"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          onClick={closeMenu}
          className="text-xl font-semibold tracking-tight text-white"
        >
          KOVELYX
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#token" className="transition hover:text-white">
            KOVL
          </a>

          <a href="#design" className="transition hover:text-white">
            Design
          </a>

          <a href="#status" className="transition hover:text-white">
            Status
          </a>

          <a href="#roadmap" className="transition hover:text-white">
            Roadmap
          </a>

          <a
            href="https://github.com/anthonyganley/kovelyx-website"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5 text-base text-slate-300">
            <a
              href="#about"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#token"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              KOVL
            </a>

            <a
              href="#design"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Design
            </a>

            <a
              href="#status"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Status
            </a>

            <a
              href="#roadmap"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Roadmap
            </a>

            <a
              href="https://github.com/anthonyganley/kovelyx-website"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}