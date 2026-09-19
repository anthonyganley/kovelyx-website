export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">

          {/* Brand */}
          <div>
            <a
              href="#about"
              className="text-xl font-bold tracking-tight text-white"
            >
              KOVELYX
            </a>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Kovelyx is currently in development on Base Sepolia. KOVL is a
              fixed-supply ERC-20 token with no additional minting, transfer
              tax, blacklist or administrative pause control.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-900 bg-blue-950/40 px-3 py-1.5 text-xs font-medium text-blue-300">
                Base Sepolia Testnet
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400">
                Mainnet not deployed
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Project
            </p>

            <div className="mt-4 flex flex-col gap-3 md:items-end">
              <a
                href="#status"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Project Status
              </a>

              <a
                href="#roadmap"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Roadmap
              </a>

              <a
                href="https://github.com/anthonyganley/kovelyx-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#about"
                className="text-sm text-blue-400 transition hover:text-blue-300"
              >
                Back to top ↑
              </a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Kovelyx. All rights reserved.
            </p>

            <p>
              KOVL testnet information is provided for development and
              informational purposes.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}