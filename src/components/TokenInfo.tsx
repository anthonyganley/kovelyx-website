import { token } from "@/data/token";

export default function TokenInfo() {
  return (
    <section id="token" className="border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          {token.symbol} Token
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Fixed by design.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          {token.symbol} is designed around a simple, transparent token model
          with a permanently fixed supply.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-500">Fixed Supply</p>

            <p className="mt-2 text-2xl font-semibold">
              {token.supply.display}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {token.symbol}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-500">Decimals</p>

            <p className="mt-2 text-2xl font-semibold">
              {token.decimals}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              ERC-20 standard precision
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-slate-500">Blockchain</p>

            <p className="mt-2 text-2xl font-semibold">
              {token.blockchain}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Currently on {token.testnet.name} testnet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}