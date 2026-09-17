import { token } from "@/data/token";

export default function TokenDesign() {
  return (
    <section id="design" className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Token Design
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple rules. Fixed from deployment.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          {token.symbol} is designed without administrative token controls that
          could change the supply or restrict ordinary token transfers after
          deployment.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-lg font-semibold text-white">
              No additional minting
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              The total {token.symbol} supply is fixed at{" "}
              {token.supply.display} tokens. No function exists to create
              additional {token.symbol}.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-lg font-semibold text-white">
              No transfer tax
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              The token contract does not apply a built-in tax or fee when{" "}
              {token.symbol} is transferred between addresses.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-lg font-semibold text-white">
              No blacklist
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              The contract does not contain a blacklist mechanism for
              selectively blocking token addresses.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-lg font-semibold text-white">
              No pause function
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              There is no administrative pause control capable of stopping
              normal {token.symbol} transfers.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-lg font-semibold text-white">
              No owner backdoor
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              The token does not include an owner-only mechanism for changing
              its core transfer or supply rules.
            </p>
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-6">
            <p className="text-lg font-semibold text-white">
              ERC-20 on {token.blockchain}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {token.symbol} follows the ERC-20 token standard and is being
              developed for the {token.blockchain} blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}