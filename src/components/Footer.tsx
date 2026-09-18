export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              KOVELYX
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Kovelyx is currently in testnet development on Base Sepolia.
              No Base Mainnet contract has been deployed.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:items-end">
            <a
              href="https://github.com/anthonyganley/kovelyx-website"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#top"
              className="transition hover:text-white"
            >
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} Kovelyx. KOVL testnet information is
            provided for development and informational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}