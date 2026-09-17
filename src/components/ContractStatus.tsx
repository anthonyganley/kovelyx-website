import { token } from "@/data/token";

export default function ContractStatus() {
  return (
    <section id="status" className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Deployment Status
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Contract information.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Kovelyx is currently in testnet development. The{" "}
          {token.testnet.name} contract shown below is not the future production
          or mainnet contract.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Mainnet */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-300">
                {token.blockchain} Mainnet
              </p>

              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
                Not deployed
              </span>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Production contract
            </p>

            <p className="mt-2 text-lg font-medium text-slate-300">
              No mainnet contract exists yet.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              An official {token.blockchain} Mainnet contract address will only
              be published after the production deployment has been completed.
            </p>
          </div>

          {/* Testnet */}
          <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-300">
                {token.testnet.name} Testnet
              </p>

              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                Test deployment
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-500">Chain ID</p>

              <p className="mt-1 font-medium text-slate-200">
                {token.testnet.chainId}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-sm text-slate-500">
                Contract address
              </p>

              <p className="mt-2 break-all font-mono text-sm text-slate-300">
                {token.testnet.contractAddress}
              </p>
            </div>

            <a
              href={token.testnet.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              View test contract on BaseScan →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}