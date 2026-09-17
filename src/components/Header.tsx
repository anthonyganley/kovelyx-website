export default function Header() {
  return (
    <header className="border-b border-slate-800/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#top"
          className="text-xl font-semibold tracking-tight text-white"
        >
          KOVELYX
        </a>

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
            href="https://github.com/anthonyganley/WS01-Kovelyx-Crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}